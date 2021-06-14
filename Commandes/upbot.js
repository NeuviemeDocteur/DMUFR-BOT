const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("**Retour du bot officiel !**")
    .setFooter("Bot en ligne 24h/24 7j/7")
    message.channel.send(embed);
};

module.exports.help = {
    name: 'upbot'
};