# adobefirefly-downloader

### This script breaks [Adobe's Generative AI User Guidelines](https://www.adobe.com/legal/licenses-terms/adobe-gen-ai-user-guidelines.html). Learn more about [Content Credentials here](https://www.adobe.com/go/CAI-HelpX-GenerativeAI-ContentCredentials). <br/>🛑 You have been warned 🛑

This can download images from adobe firefly without the watermark. Generate the images you want then open the console with CTRL + Shift + I then run [this](https://github.com/xNasuni/adobefirefly-downloader/blob/main/universal-main.js) script.

> This script downloads the images and saves the **image data** to a file called "firefly-" and then the **current unix time**, the image index with a suffix of a "@", and the file extension will be a **.jpg**

### Updates
> [**`d3479da`**](https://github.com/xNasuni/adobefirefly-downloader/commit/d3479da7479507ba97d88d8112bb6d9498560dba) Now works for **Text To Image** and **Generative Recolor** - **_(6/15/2023)_**<br/>
> [**`e4c1b2d`**](https://github.com/xNasuni/adobefirefly-downloader/commit/e4c1b2d7a3b0ea7527a58ed8bed767119bb661fc) Now works for **Text Effects** - **_(6/17/2023)_**<br/>
> [**`e6c4b67`**](https://github.com/xNasuni/adobefirefly-downloader/commit/e6c4b67f94f440f5a33389a45ffcba50bd349992) Fixed **Generative Fill**, broke because of one word - **_(6/21/2023)_** <br/>
> [**`1596f1d`**](https://github.com/xNasuni/adobefirefly-downloader/commit/1596f1d4c39654067a4b90b8f8577a4a33492468) Fixed **Text To Image** & Dropped support for single scripts. See [universal-main.js](https://github.com/xNasuni/adobefirefly-downloader/blob/main/universal-main.js)  - **_(9/11/2023)_**<br/>

## Extra Information

> intended for [adobe firefly](https://firefly.adobe.com)<br/>
> thank you~!


### Comparison
> The left picture is the one downloaded from using the download button from adobe firefly<br/>
> The right picture is the one downloaded with this script
<img src="./showcase.png"/>
