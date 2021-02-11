const gTTS = require('gtts');
const process = require('process');

module.exports = async function(msg, args){
    if(msg.member.voice.channel){
        const connection = await msg.member.voice.channel.join();
        
        try{
            var sentence = args.join(' ');
            var gtts = new gTTS(sentence, 'hr');

            gtts.save('sentence.mp3', function(err) {
                if(err) {
                    throw new Error(err);
                }

                var filename = process.cwd();

                if(filename.startsWith('C:')){
                    filename = filename + '\\sentence.mp3';
                }else{
                    filename = filename + '/sentence.mp3';
                }

                const dispathcer = connection.play(filename);
                console.log(filename);

                dispathcer.on('finish', () => {
                    connection.disconnect();
                })

                dispathcer.on('error', console.error);


            });
            
        }catch(err){
            console.log(err);
            msg.channel.send("An error occured!");
        }
        

    }else{        
        msg.channel.send("You must be in a voice channel!");
    }
}