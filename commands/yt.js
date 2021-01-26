const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = async function(msg, args){
    var ytQuery = args.join(' ');

    if(ytQuery == ''){
        ytQuery = 'ivan vlahov';
    }

    let url = `https://www.googleapis.com/youtube/v3/channels?key=${process.env.GOOGLE_API_KEY}&part=contentDetails,statistics,snippet&forUsername=${ytQuery}&maxResults=1`;
    let response = await fetch(url);
    let json = await response.json();

    try{
        if(json.pageInfo.totalResults == 0){
            msg.channel.send('No user found!');
        }else{
            let videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.GOOGLE_API_KEY}&part=snippet&playlistId=${json.items[0].contentDetails.relatedPlaylists.uploads}&maxResults=1`;
            let videosResponse = await fetch(videosUrl);
            let videosJson = await videosResponse.json();

            var message = new Discord.MessageEmbed()
                .setTitle(json.items[0].snippet.title)
                .setColor('#fc038c')
                .setURL(`https://youtube.com/channel/${json.items[0].id}`)
                .addFields(
                    { name: 'Subscribers: ', value: json.items[0].statistics.subscriberCount, inline: true},
                    { name: 'Video views: ', value: json.items[0].statistics.viewCount, inline: true},
                    { name: 'Number of videos: ', value: json.items[0].statistics.videoCount, inline: false},
                    { name: 'Latest video: ', value: `[${videosJson.items[0].snippet.title}](https://www.youtube.com/watch?v=${videosJson.items[0].snippet.resourceId.videoId})`}
                );

            msg.channel.send(message);
        }
    }catch(err){
        console.log(err);
        msg.channel.send('Something went wrong while fetching user info.');
    }
}