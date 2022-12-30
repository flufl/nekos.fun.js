# nekos.fun 
Unofficial API wrapper for nekos.fun made in JavaScript. Provide SFW and NSFW anime/real life pictures as well as GIFs for all to use. 

All Endpoints: https://www.nekos.fun/apidoc.html

API discord server: https://discord.gg/UeZagdFVXh <br>
My discord server: https://discord.gg/NFkMxFeEWr
## Installation
``npm i nekos-fun``

## Examples
```javascript
const neko = require('nekos-fun')

async function myFunc() {
    // SFW Endpoint
    console.log(`SFW: ${await neko.sfw.hug()}`)

    // NSFW Endpoint
    console.log(`NSFW: ${await neko.nsfw.gasm()}`)
}

// Call your function
myFunc()
```