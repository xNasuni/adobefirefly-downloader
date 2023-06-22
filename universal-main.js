(async () => {
    function GetPageType() {
        var Type = ""
        var URL = window.location.href
        var Host = window.location.host

        if (URL.includes('firefly.adobe.com/generate/recolor')) {
            Type = 'recolorimages'
        }

        if (URL.includes('firefly.adobe.com/generate/images')) {
            Type = 'text2image'
        }

        if (URL.includes('firefly.adobe.com/generate/font-styles')) {
            Type = 'texteffects'
        }

        if (URL.includes('firefly.adobe.com/generate/inpaint') || URL.includes('firefly.adobe.com/upload/inpaint')) {
            Type = 'genfill'
        }

        if (!Host.startsWith('firefly.adobe.com')) {
            Type = 'incorrectsite'
        }

        if (URL.endsWith('firefly.adobe.com/')) {
            Type = 'main'
        }

        return Type
    }

    var PageType = GetPageType()
    if (PageType == 'incorrectsite') {
        var Confirmed = window.confirm('This script only works on https://firefly.adobe.com/, do you want to go there?')
        if (Confirmed) {
            window.location.href = 'https://firefly.adobe.com/'
        }
        return
    }

    if (PageType == 'main') {
        return window.alert('You must go to one of the AI\'s pages then run this')
    }

    if (PageType == 'recolorimages' || PageType == 'text2image') {
        if (document.getElementsByClassName('zytb3jxS7InGo39qdpCi').length != 4) {
            return window.alert('You need to generate images before you run this!')
        }

        function GetImage(Index) {
            return document.getElementsByClassName('zytb3jxS7InGo39qdpCi')[Index - 1]
        }

        function DownloadImage(ImageElement, FileName) {
            var DownloadElement = document.createElement('a')
            DownloadElement.setAttribute('download', FileName)

            var URL = ImageElement.src

            DownloadElement.setAttribute('href', URL)
            DownloadElement.click()

            DownloadElement.remove()
        }

        window.alert('You need to allow this website to download multiple files to download all of the images if you haven\'t already.')
        for (let Index = 1; Index <= 4; Index++) {
            DownloadImage(GetImage(Index), `firefly-${Date.now()} @ ${Index}.jpg`)
        }
    }

    if (PageType == 'genfill') {
        if (document.getElementsByTagName('clio-inpaint').length == 0) {
            return window.alert('You need to generate an image before you run this!')
        }

        function GetCanvas() {
            return document.getElementsByTagName('clio-inpaint')[0].shadowRoot.firstElementChild.querySelector('clio-md-stage').shadowRoot.querySelector('clio-md-compositor-canvas').shadowRoot.firstElementChild
        }

        function DownloadCanvas(Canvas, FileName) {
            var DownloadElement = document.createElement('a')
            DownloadElement.setAttribute('download', FileName)

            var ImageData = Canvas.toDataURL('image/png')

            var URL = ImageData.replace(/^data:image\/png/, 'data:application/octet-stream');

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

        function DownloadCanvas(Canvas, FileName) {
            var DownloadElement = document.createElement('a')
            DownloadElement.setAttribute('download', FileName)

            var ImageData = Canvas.toDataURL('image/png')

            var URL = ImageData.replace(/^data:image\/png/, 'data:application/octet-stream');

            DownloadElement.setAttribute('href', URL)
            DownloadElement.click()

            DownloadElement.remove()
        }

        DownloadCanvas(GetCanvas(), `firefly-${Date.now()}.jpg`)
    }
})()
