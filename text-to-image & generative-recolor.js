(async () => {
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
})()
