const requireDir = require('require-dir');
const commands = requireDir('./commands');

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