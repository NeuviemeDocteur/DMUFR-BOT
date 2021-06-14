const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("**:white_check_mark: Bot discord démarré**")
    message.channel.send(embed);
};

module.exports.help = {
    name: 'startmsg'
};