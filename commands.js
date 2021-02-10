const help = require("./commands/help");
const gif = require("./commands/gif");
const cf = require("./commands/cf");
const yt = require("./commands/yt");

const commands = {
    help,
    gif,
    cf,
    yt
};

module.exports = async (msg) => {
    var tokens = msg.content.split(' ');
    var first = tokens.shift();

    if(first == '-tmtr'){
        var tag = tokens.shift();

        try{
            commands[tag](msg, tokens);
        }catch(err){
            commands['help'](msg, tokens);
        }
        
    }
}