const neko = require('../fetch')

module.exports = {
    nsfw: {
        fourK: function ()
        {
            return neko.get('4k');
        },

        blowjob: function ()
        {
            return neko.get('blowjob');
        },

        blowjob: function ()
        {
            return neko.get(['blowjob', 'bj'][Math.floor(Math.random() * 2)]);
        },

        boobs: function ()
        {
            return neko.get('boobs');
        },

        cum: function ()
        {
            return neko.get('cum');
        },

        feet: function ()
        {
            return neko.get('feet');
        },

        hentai: function ()
        {
            return neko.get('hentai');
        },

        wallpapers: function ()
        {
            return neko.get('wallpapers');
        },

        spank: function ()
        {
            return neko.get('spank');
        },

        gasm: function ()
        {
            return neko.get('gasm');
        },

        lesbian: function ()
        {
            return neko.get('lesbian');
        },

        cunny: function ()
        {
            return neko.get('pussy');
        },

        anal: function ()
        {
            return neko.get('anal');
        },

        holo: function ()
        {
            return neko.get('holo');
        },

        belle: function ()
        {
            return neko.get('belle');
        },
    }
}