const Discord = require('discord.js');
const client = new Discord.Client();

client.login('ODAzMzkzMDgzMjY0OTkxMjMy.YA9IHQ.7znXlZv2SM2khi-idmHFviB0Xmc');

client.on('ready', () => console.log('ready'));

client.on('message', (msg) => {
    if(msg.content.startsWith('-tmtr ')){
        var withoutTag = msg.content.substring(6);

        if(withoutTag == 'help'){
            msg.channel.send('you asked for help');
        }
        // else if(withoutTag == ''){

        // }else if(withoutTag == ''){
            
        // }else if(withoutTag == ''){
            
        // }else if(withoutTag == ''){
            
        // }else if(withoutTag == ''){
            
        // }
    }
})