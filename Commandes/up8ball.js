const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("**Le préfix du bot est maintenant : * **")
    message.channel.send(embed);
};

module.exports.help = {
    name: 'upprefix'
};