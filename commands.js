const help = require("./commands/help");
const gif = require("./commands/gif");
const cf = require("./commands/cf");

const commands = {
    help,
    gif,
    cf
};

module.exports = async (msg) => {
    var tokens = msg.content.split(' ');
    var first = tokens.shift();

    if((msg.author.id == process.env.ADMIN_ID || msg.channel.id == process.env.TESTING_CHANNEL) && first == '-tmtr'){
        var tag = tokens.shift();
        commands[tag](msg, tokens);
    }
}