const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = async function(msg, args){
    var cryptoQuery = args[0];

    if(cryptoQuery.length == 0){
        cryptoQuery = 'BTC';
    }

    try{
        let url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${cryptoQuery}&CMC_PRO_API_KEY=${process.env.COINMARKETCAP_API_KEY}`;
        let response = await fetch(url);
        let json = await response.json();

        console.log(json);
        console.log(cryptoQuery.length);

        let data = json['data'][cryptoQuery.toUpperCase()];
        let quote = data['quote']['USD'];

        const prec = 3;

        var message = new Discord.MessageEmbed()
            .setTitle(data['name'])
            .setColor('#fc038c')
            .addFields(
                {name: 'Symbol:', value: data['symbol']},
                {name: 'Price:', value: parseFloat(quote['price']).toFixed(prec).toString() + ' USD', inline: true},
                {name: 'Supply:', value: parseFloat(data['total_supply']).toFixed(prec).toString() + ' ' + cryptoQuery.toUpperCase(), inline: true},
                {name: 'Market cap:', value: parseFloat(quote['market_cap']).toFixed(prec).toString() + ' USD', inline: true},
                {name: 'Change 1h:', value: parseFloat(quote['percent_change_1h']).toFixed(prec).toString() + '%', inline: true},
                {name: 'Change 1d:', value: parseFloat(quote['percent_change_24h']).toFixed(prec).toString() + '%', inline: true},
                {name: 'Change 7d:', value: parseFloat(quote['percent_change_7d']).toFixed(prec).toString() + '%', inline: true}
            )

        msg.channel.send(message);
    }catch(err){
        msg.channel.send('Something went wrong!');
    }
}