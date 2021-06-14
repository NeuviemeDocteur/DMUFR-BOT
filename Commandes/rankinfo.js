const Discord = require('discord.js');
const { title } = require('process');
const { MessageEmbed } = require('discord.js');


exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
  .setTitle("----------[📋 Informations sur les grades]----------")
  .addField(`**<a:energitics:853658098262999051> Joueur**`, `/home (3 max)`)
  .addField("/tpa", "\u200b")
  .addField("/warp", "\200b")
  .addField(`<a:nitro:853542695335231488> **Nitro Booster**`, `/home (10 max)`)
  .addField("/warp","/tpa")
  .addField(`/tpahere`, "/feed")
  .addField("/nick", "2 tardis autorisé")
  .setColor('RANDOM')
  .setTimestamp();

  message.channel.send(embed);
};

exports.help = {
  name: 'inforank'
};