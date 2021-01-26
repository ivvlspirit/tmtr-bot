const fetch = require("node-fetch");

module.exports = async function(msg, args){
    console.log('called cf!');

    if(args.length == 0){
        msg.channel.send('You must provide a CF handle! E.g. -tmtr cf ivaneo');
    }else{
        var handle = args.shift();

        let url = `https://codeforces.com/api/user.info?handles=${handle}`;
        let response = await fetch(url);
        let json = await response.json();

        console.log(json);

        if(json.status != 'OK'){
            msg.channel.send('Something went wrong while fetching user info!');
        }else{
            msg.channel.send(`${json.result[0].handle}:\n\tRating: ${json.result[0].rating}\n\tMax. rating: ${json.result[0].maxRating}`);
        }
    }

    
}