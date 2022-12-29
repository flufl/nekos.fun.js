const fetch = require('node-fetch')

module.exports = {
    get: async function (tag)
    {
        return fetch(`http://api.nekos.fun:8080/api/${tag}`)
            .then(res => res.json())
            .then(json => { return json.image })
    }
}