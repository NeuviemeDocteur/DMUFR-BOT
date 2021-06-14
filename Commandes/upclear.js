const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('#27FF00')
    .addField(':white_check_mark: **Réparation :**', 'Commande /clear réparé')
    .addField('**cause :** Erreur de permissions // Erreur dans le code', 'Les personnes du staff ayant les perms ne pouvait pas faire cette commande')
    message.channel.send(embed);
};

module.exports.help = {
    name: 'up1'
};