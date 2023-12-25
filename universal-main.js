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
                window.alert('You must be in one of the Generative AI\'s pages to use this script')
                return void (0)
            }

            if (PageType == 'recolorimages' || PageType == 'text2image') {
                if (document.getElementsByClassName('zytb3jxS7InGo39qdpCi').length != 4) {
                    console.warn(document.getElementsByClassName('zytb3jxS7InGo39qdpCi').length != 4)
                    window.alert('You need to generate images before you run this!')
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
                    window.alert('You need to generate images before you run this!')
                }

                function GetCanvas() {
                    return document.getElementsByTagName('clio-inpaint')[0].shadowRoot.firstElementChild.querySelector('clio-md-stage').shadowRoot.querySelector('clio-md-compositor-canvas').shadowRoot.firstElementChild
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
                    window.alert('You need to generate images before you run this!')
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
