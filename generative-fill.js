// I HIGHLY RECOMMEND TO USE THE UNIVERSAL SCRIPT AS IT IS MORE INTUITIVE, HELPFUL AND EASIER TO USE.

(async () => {
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
})()
