const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Le préfix est : *')
    message.channel.send(embed);
};

module.exports.help = {
    name: 'help:prefix'
};