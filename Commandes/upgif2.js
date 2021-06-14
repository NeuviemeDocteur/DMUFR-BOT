const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("**Ajout du gif //euro2020**")
    message.channel.send(embed);
};

module.exports.help = {
    name: 'upgif2'
};