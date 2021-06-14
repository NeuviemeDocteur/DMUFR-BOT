const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Mise à jour du //serverinfo**')
    message.channel.send(embed);
};

module.exports.help = {
    name: 'upinfo'
};