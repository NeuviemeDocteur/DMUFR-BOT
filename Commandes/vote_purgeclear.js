const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("**SONDAGE !**")
    .setDescription("Vous les membres de ce serveur ! vous allez devoir voter !")
    .addField("Mettez la réaction suivante pour savoir si vous préféré /clear", "Réaction : :white_check_mark:", true)
    .addField("Ou /purge", "Réaction : :o:", true)
    message.channel.send(embed);
    
};

module.exports.help = {
    name: 'vote1'
};