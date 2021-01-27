const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = async function(msg, args){
    var gifQuery = args.join(' ');

    if(gifQuery == ''){
        gifQuery = 'programming meme';
    }

    try{
        let url = `https://api.tenor.com/v1/search?q=${gifQuery}&key=${process.env.TENOR_KEY}&limit=8`;
        let response = await fetch(url);
        let json = await response.json();

    
        var randomGif = Math.floor(Math.random() * json.results.length);

        var gifUrl = json.results[randomGif].media[0].mediumgif.url;
        var gifFilename = gifUrl.split('/')[gifUrl.split('/').length-1];

        var message = new Discord.MessageEmbed()
            .setTitle('Tenor GIF Keyboard')
            .setURL('https://tenor.com')
            .setColor('#fc038c')
            .attachFiles([gifUrl])
            .setImage(`attachment://${gifFilename}`);

        msg.channel.send(message);
    }catch(err){
        console.log(err);
        msg.channel.send(gifQuery + ' is a dumb query.');
    }
}