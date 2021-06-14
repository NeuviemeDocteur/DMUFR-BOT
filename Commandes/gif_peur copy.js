const Discord = require ('discord.js');


module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("**Quand tu vien de connaitre à fnaf, et que t'as jouer la première game et que t'as eu un Jumpscare**")
    .setDescription("https://media.giphy.com/media/3o6gE0QSc6H9DyplqE/giphy.gif")
    message.channel.send(embed);
    
};

module.exports.help = {
    name: 'fnaf'
};