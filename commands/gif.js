const fetch = require("node-fetch");

module.exports = async function(msg, args){
    var gifQuery = args.join(' ');

    if(gifQuery == ''){
        gifQuery = 'programming meme';
    }

    let url = `https://api.tenor.com/v1/search?q=${gifQuery}&key=${process.env.TENOR_KEY}&limit=8`;
    let response = await fetch(url);
    let json = await response.json();

    var randomGif = Math.floor(Math.random() * json.results.length);

    msg.channel.send(json.results[randomGif].url);
}