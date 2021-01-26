const Discord = require('discord.js');

module.exports = function(msg, args) {
    var message = new Discord.MessageEmbed()
        .setTitle('TMTR Bot Commands')
        .setColor('#fc038c')
        .addFields(
            {name: 'Command list:', value: '`-tmtr help`'},
            {name: 'CodeForces user info:', value: '`-tmtr cf *handle*`'},
            {name: 'GIF Search: ', value: '`-tmtr gif *query*`'}
        )

    msg.channel.send(message);
}