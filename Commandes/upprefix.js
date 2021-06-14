const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("**la commande /8ball à été mis à jour ! De nouvelle réponses sont disponible !**")
    message.channel.send(embed);
};

module.exports.help = {
    name: 'up8ball'
};