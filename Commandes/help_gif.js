const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("📚 Commandes pour **Gif**")
    .addField("**Gif de Fnaf**", "``fnaf``", true)
    message.channel.send(embed);
};

module.exports.help = {
    name: 'help:gif'
};