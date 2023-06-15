( async () => {
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

    for (let Index = 1; Index <= 4; Index++) {
        DownloadImage(GetImage(Index), `firefly-${Date.now()} @ ${Index}.jpg`)
    }
} )()
