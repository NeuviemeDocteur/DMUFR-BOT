const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("**la commande /fnaf est maintenant listé dans la commande /help**")
    message.channel.send(embed);
};

module.exports.help = {
    name: 'note1'
};