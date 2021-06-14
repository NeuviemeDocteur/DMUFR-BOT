const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("**La commande /clear a été mis à jour :white_check_mark: **")
    message.channel.send(embed);
};

module.exports.help = {
    name: 'upclear2'
};