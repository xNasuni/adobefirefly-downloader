// ==UserScript==
// @name        Adobe Firefly DL
// @namespace   http://tampermonkey.net/
// @description Allows you to download anything on adobe's firefly AI without a watermark.
// @author      Mia @ github.com/xNasuni
// @match       *://firefly.adobe.com/*
// @grant       none
// @version     1.1
// @updateURL   https://github.com/xNasuni/adobefirefly-downloader/raw/main/adobefirefly-dl.user.js
// @downloadURL https://github.com/xNasuni/adobefirefly-downloader/raw/main/adobefirefly-dl.user.js
// @supportURL  https://github.com/xNasuni/adobefirefly-downloader/issues
// ==/UserScript==

(function () {
    'use strict'

    function showNotification(message, bgcol) {
        var containerDiv = document.getElementById('notification-container')
        if (!containerDiv) {
            containerDiv = document.createElement('div')
            containerDiv.id = 'notification-container'
            containerDiv.style.position = 'fixed'
            containerDiv.style.bottom = '53px'
            containerDiv.style.left = '5px'
            containerDiv.style.display = 'flex'
            containerDiv.style.gap = '8px'
            containerDiv.style.flexDirection = 'column-reverse'
            containerDiv.style.zIndex = '9999'
            document.body.appendChild(containerDiv)
        }

        var notificationDiv = document.createElement('div')
        notificationDiv.textContent = message
        notificationDiv.style.padding = '10px 20px'
        notificationDiv.style.borderRadius = '20px'
        notificationDiv.style.backgroundColor = bgcol
        notificationDiv.style.color = '#fff'
        notificationDiv.style.opacity = '0'
        notificationDiv.style.transition = 'opacity 0.3s, transform 0.5s'
        notificationDiv.style.transform = 'translateY(0)'

        containerDiv.childNodes.forEach(function (existingNotification) {
            existingNotification.style.zIndex = (parseInt(existingNotification.style.zIndex) + 1).toString()
        })

        containerDiv.appendChild(notificationDiv)

        void notificationDiv.offsetWidth

        setTimeout(function () {
            notificationDiv.style.opacity = '1'
            notificationDiv.style.transform = 'translateY(-30%)'
        }, 100)

        setTimeout(function () {
            notificationDiv.style.opacity = '0'
            notificationDiv.style.transform = 'translateY(0)'
        }, 4000)

        setTimeout(function () {
            notificationDiv.remove()

            if (document.querySelectorAll('#notification-container > div').length === 0) {
                containerDiv.remove()
            }
        }, 5000)
    }

    function runMainScript() {
        (async () => {
            function GetPageType() {
                var Type = ""
                var URL = window.location.href
                var Host = window.location.host

                if (URL.includes('firefly.adobe.com/generate/recolor')) {
                    Type = 'recolorimages'
                }

                if (URL.includes('firefly.adobe.com/inspire/images') || URL.includes('firefly.adobe.com/generate/images')) {
                    Type = 'text2image'
                }

                if (URL.includes('firefly.adobe.com/generate/font-styles')) {
                    Type = 'texteffects'
                }

                if (URL.includes('firefly.adobe.com/generate/inpaint') || URL.includes('firefly.adobe.com/upload/inpaint')) {
                    Type = 'genfill'
                }

                if (URL.endsWith('firefly.adobe.com/')) {
                    Type = 'main'
                }

                return Type
            }

            var PageType = GetPageType()

            if (PageType == 'main') {
                showNotification('You must be in one of the Generative AI\'s pages to use this script', '#a00')
                return void (0)
            }

            if (PageType == 'recolorimages' || PageType == 'text2image') {
                if (document.getElementsByClassName('zytb3jxS7InGo39qdpCi').length != 4) {
                    console.warn(document.getElementsByClassName('zytb3jxS7InGo39qdpCi').length != 4)
                    showNotification('You need to generate images before you run this!', '#a00')
                    return void (0)
                }

                function GetImage(Index) {
                    return document.getElementsByClassName('zytb3jxS7InGo39qdpCi')[Index]
                }

                function DownloadImage(ImageElement, FileName) {
                    var DownloadElement = document.createElement('a')
                    DownloadElement.setAttribute('download', FileName)

                    var URL = ImageElement.src

                    DownloadElement.setAttribute('href', URL)
                    DownloadElement.click()

                    DownloadElement.remove()
                }

                window.alert('You might need to allow this website to download multiple files to download all of the images if you haven\'t already.')
                for (let Index = 0; Index < 4; Index++) {
                    DownloadImage(GetImage(Index), `firefly-${Date.now()} @ ${Index}.jpg`)
                }
            }

            if (PageType == 'genfill') {
                if (document.getElementsByTagName('clio-inpaint').length == 0) {
                    showNotification('You need to generate images before you run this!', '#a00')
                }

                function GetCanvas() {
                    return document.getElementsByTagName('clio-inpaint')[0].shadowRoot.querySelector("clio-md-stage").shadowRoot.querySelector("clio-md-compositor-canvas").shadowRoot.querySelector("canvas")
                }

                function DownloadCanvas(Canvas, FileName) {
                    var DownloadElement = document.createElement('a')
                    DownloadElement.setAttribute('download', FileName)

                    var ImageData = Canvas.toDataURL('image/png')

                    var URL = ImageData.replace(/^data:image\/png/, 'data:application/octet-stream')

                    DownloadElement.setAttribute('href', URL)
                    DownloadElement.click()

                    DownloadElement.remove()
                }

                DownloadCanvas(GetCanvas(), `firefly-${Date.now()}.jpg`)
            }

            if (PageType == 'texteffects') {
                function GetCanvas() {
                    return document.getElementById('F9m7_EUFfq4HgYC1dC0L')
                }

                if (GetCanvas() == null) {
                    showNotification('You need to generate images before you run this!', '#a00')
                }

                window.alert("I highly recommend downloading the image through adobe for this because if you download it through here, the quality is decreased, and if you download it through adobe you can easily remove the watermark because it's covering nothing most of the time. ")
                var Yes = window.confirm("Do you want to continue?")
                if (!Yes) { return }

                function DownloadCanvas(Canvas, FileName) {
                    var DownloadElement = document.createElement('a')
                    DownloadElement.setAttribute('download', FileName)

                    var ImageData = Canvas.toDataURL('image/png')

                    var URL = ImageData.replace(/^data:image\/png/, 'data:application/octet-stream')

                    DownloadElement.setAttribute('href', URL)
                    DownloadElement.click()

                    DownloadElement.remove()
                }

                DownloadCanvas(GetCanvas(), `firefly-${Date.now()}.jpg`)
            }
        })()
    }

    var button = document.createElement('button')
    button.textContent = 'Firefly DL'
    button.style.position = 'fixed'
    button.style.bottom = '25px'
    button.style.left = '5px'
    button.style.border = 'none'
    button.style.padding = '10px 20px'
    button.style.borderRadius = '20px'
    button.style.backgroundColor = '#fff'
    button.style.color = '#000'
    button.style.cursor = 'pointer'
    button.style.filter = 'invert(1)'
    button.style.transition = 'background-color 0.3s, transform 0.2s'
    button.style.zIndex = '9999'

    button.addEventListener('mouseover', function () {
        button.style.backgroundColor = '#000'
        button.style.color = '#fff'
    })

    button.addEventListener('mouseout', function () {
        button.style.backgroundColor = '#fff'
        button.style.color = '#000'
    })

    button.addEventListener('mousedown', function () {
        button.style.transform = 'scale(0.8)'
    })

    document.addEventListener('mouseup', function () {
        button.style.transform = 'scale(1)'
    })

    button.addEventListener('click', runMainScript)

    document.body.appendChild(button)
})()
