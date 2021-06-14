const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("📚 Commandes pour **l'Administration**")
    .setDescription("Les commandes suivante sont réservé au staff")
    .addField(":muscle: **Vérifier / Voir les statistique d'un membre :**", "📋 ``stats``", true)
    .addField(":muscle: **Supprimer plusieur méssages facilement**", "📋 ``clear <nombre de message>``", true)
    message.channel.send(embed);
};

module.exports.help = {
    name: 'help:administration'
};