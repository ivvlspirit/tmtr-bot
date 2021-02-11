const Discord = require('discord.js');

module.exports = function(msg, args) {
    var message = new Discord.MessageEmbed()
        .setTitle('TMTR Bot Commands')
        .setColor('#fc038c')
        .addFields(
            {name: 'Command list:', value: '`-tmtr help`'},
            {name: 'CodeForces user info:', value: '`-tmtr cf *handle*`'},
            {name: 'YouTube user info:', value: '`-tmtr yt *username*`'},
            {name: 'GIF Search: ', value: '`-tmtr gif *query*`'},
            {name: 'Text to speech: ', value: '`-tmtr say *sentence*`'},
            {name: 'Crypto prices:', value: '`-tmtr crypto *symbol*`'}
        )

    msg.channel.send(message);
}