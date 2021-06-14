const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Marquer la même commande suivuit de : ce que vous voulez savoir (tout en acroché) :')
    .addField("📚 **Administration**", "👀 **Fun**", true)
    .addField("🤖 **Préfix**", "🌆 **Gif**", true)
    message.channel.send(embed);
};

module.exports.help = {
    name: 'help'
};