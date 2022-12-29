const neko = require('../fetch')

module.exports = {
    // SFW Functions //
    sfw: 
    {
        kiss: function ()
        {
            return neko.get('kiss');
        },

        lick: function ()
        {
            return neko.get('lick')
        },

        hug: function ()
        {
            return neko.get('hug');
        },

        baka: function ()
        {
            return neko.get('baka');
        },

        cry: function ()
        {
            return neko.get('cry');
        },

        poke: function ()
        {
            return neko.get('poke');
        },

        smug: function ()
        {
            return neko.get('smug');
        },

        slap: function ()
        {
            return neko.get('slap');
        },

        tickle: function ()
        {
            return neko.get('tickle');
        },

        pat: function ()
        {
            return neko.get('pat');
        },

        laugh: function ()
        {
            return neko.get('laugh');
        },

        feed: function ()
        {
            return neko.get('feed');
        },

        cuddle: function ()
        {
            return neko.get('cuddle');
        },

        animalEars: function ()
        {
            return neko.get('animalears');
        },

        foxGirl: function ()
        {
            return neko.get('foxgirl');
        },

        catGirl: function ()
        {
            return neko.get('neko');
        },
    }
}