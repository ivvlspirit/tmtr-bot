require("dotenv").config();


const Discord = require('discord.js');
const client = new Discord.Client();

const commandHandler = require('./commands');

client.login(process.env.TOKEN);

client.on('ready', () => console.log('The bot is ready.'));

client.on('message', commandHandler);