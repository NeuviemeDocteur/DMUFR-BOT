const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('#27FF00')
    .setTitle(':white_check_mark: **Le bot est maintenant en ligne 24h/24 et 7j/7, il est heberger sur un site maintenant !**')
    message.channel.send(embed);
};

module.exports.help = {
    name: 'hebergemsg'
};