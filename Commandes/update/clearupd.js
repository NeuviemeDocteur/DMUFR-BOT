const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('**Ajout de la commande /clear**')
    message.channel.send(embed);
};

module.exports.help = {
    name: 'up1'
};