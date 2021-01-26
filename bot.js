require('dotenv').config();

const http = require('http');


const Discord = require('discord.js');
const client = new Discord.Client();

const commandHandler = require('./commands');

client.login(process.env.TOKEN);

client.on('ready', () => console.log('The bot is ready.'));

client.on('message', commandHandler);


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
}).listen(process.env.PORT || 8080);