// I HIGHLY RECOMMEND TO USE THE UNIVERSAL SCRIPT AS IT IS MORE INTUITIVE, HELPFUL AND EASIER TO USE.

(async () => {
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
})()
