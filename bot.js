require('dotenv').config();

const http = require('http');
const ping = require('ping');


const Discord = require('discord.js');
const client = new Discord.Client();

const commandHandler = require('./commands');

client.login(process.env.TOKEN);

client.on('ready', () => console.log('The bot is ready.'));

client.on('message', commandHandler);

const intervalTime = 1000*60*20;

setInterval(() => {
    ping.sys.probe('tmtr-bot.herokuapp.com', function(isAlive){
        console.log('Server status: ' + (isAlive ? 'running' : 'sleeping'));
    });
}, intervalTime);


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
}).listen(process.env.PORT || 8080);