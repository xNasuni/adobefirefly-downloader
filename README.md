# adobefirefly-downloader

This can download images from adobe firefly without the watermark. Generate the images you want then open the console (CTRL + Shift + I) then run [this](https://github.com/xNasuni/adobefirefly-downloader/blob/main/universal-main.js) script.

> This script downloads the images and saves the **image data** to a file called "firefly-" and then the **current unix time**, the image index with a suffix of a "@", and the file extension will be a **.jpg**

### Updates
> [**`d3479da`**](https://github.com/xNasuni/adobefirefly-downloader/commit/d3479da7479507ba97d88d8112bb6d9498560dba) Now works for **Text To Image** and **Generative Recolor** - **_(6/15/2023)_**<br/>
> [**`e4c1b2d`**](https://github.com/xNasuni/adobefirefly-downloader/commit/e4c1b2d7a3b0ea7527a58ed8bed767119bb661fc) Now works for **Text Effects** - **_(6/17/2023)_**<br/>
> [**`e6c4b67`**](https://github.com/xNasuni/adobefirefly-downloader/commit/e6c4b67f94f440f5a33389a45ffcba50bd349992) Fixed **Generative Fill**, broke because of one word - **_(6/21/2023)_**

## Extra Information

> intended for [adobe firefly](https://firefly.adobe.com)<br/>
> thank you~!<br/>
> **this is probably the last update until adobe adds new things or breaks these scripts**!<br/>
> **I recommend not to use this script for the Text Effects because you can simply download it from adobe and remove the watermark by painting over it since all it covers is pretty much the static background color and downloading it from the canvas makes it look pixelated!**

### Comparison
> The left picture is the one downloaded from using the download button from adobe firefly<br/>
> The right picture is the one downloaded with this script
<img src="./showcase.png"/>
