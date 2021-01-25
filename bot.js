require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

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