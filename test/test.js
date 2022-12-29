const neko = require('../index')

async function myFunc() {
    // SFW Endpoint
    console.log(`SFW: ${await neko.sfw.hug()}`)

    // NSFW Endpoint
    console.log(`NSFW: ${await neko.nsfw.gasm()}`)
}

// Call your function
myFunc()