const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("📚 Commandes pour **Fun**")
    .setDescription("Voici les différentes commandes suivante")
    .addField("🎮 **Gif fnaf 1 :**", "``fnaf``", true)
    .addField("🎮 **Question / Réponse au hasard :**", "``8ball``", true)
    .addField("🎮 Be Right Back (AFK)**", "``afk``", true)
    message.channel.send(embed);
};

module.exports.help = {
    name: 'help:fun'
};