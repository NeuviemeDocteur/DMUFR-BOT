const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("**Ajout du Bot de Ticket OFFICIEL !**")
    .addFields("Pre-Release", " 1.0.0")
    .setFooter("Bot en version BETA, merci de créé un ticket en cas de bug / ou suggestion")
    message.channel.send(embed);
};

module.exports.help = {
    name: 'upticket'
};