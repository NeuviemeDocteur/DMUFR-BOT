const Discord = require('discord.js');
const { title } = require('process');
const { MessageEmbed } = require('discord.js');
const attachment = new Discord
                      .MessageAttachment('./images/dmul.gif', 'dmul.gif');


exports.run = (client, message, args) => {
  let début = Date.now();
    let embed = new Discord.MessageEmbed()
  .setTitle(message.guild.name)
  .setImage('attachment://dmul.gif')
  .attachFiles(attachment)
  .setColor('RANDOM')
  .setDescription(`<a:energitics:853658098262999051> Nombre de membres : \`${message.guild.memberCount}\``)
  .addField('Localisation du serveur :', message.guild.region, true)
  .addField(`<a:loading:853643536401825832> Ping:`, ` \ ${Date.now() - début} ms \ `)
  .addField('Serveur créé le :', message.guild.createdAt.toLocaleString(), true)
  .addField(`<a:nitro:853542695335231488> Status sur les boosts :`, "`\ 5 Boosts, Niveau 2\ `")
  .addField("Les boosteurs :muscle: :", "`\ Amélia, 9e_Docteur, OrtarkGendar, Mr_Tested\`")
  .setTimestamp();

  message.channel.send(embed);
};

exports.help = {
  name: 'serverinfo'
};