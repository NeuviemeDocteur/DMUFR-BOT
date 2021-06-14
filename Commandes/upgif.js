const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("**Ajout d'une commande de fun pour tous le monde : /fnaf**")
    message.channel.send(embed);
};

module.exports.help = {
    name: 'up3'
};