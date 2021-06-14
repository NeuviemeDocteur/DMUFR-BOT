const Discord = require('discord.js');
const { title } = require('process');
const { MessageEmbed } = require('discord.js');
const attachment = new Discord
                      .MessageAttachment('./images/rules2.gif', 'rules2.gif');


exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
  .attachFiles(attachment)
  .addField('attachment://rules2.gif')
  .setDescription("Le staff doit aussi accepter ces règles, et doit les suivres.", "Toutes règles non-respectés seront puni")
  .addField("\u200b","\u200b")
  .addField(`**<a:discord:853749867369463818> Discord**`, "1.Il est formellement interdit de spam | de flood | d’écrire en full majuscule (plein de fois) dans les différents salons sous peine de mute.")
  .addField("\u200b", "2.Les liens menant au site non-protégé, ou un nsfw va être sanctionné d'un ban perm SANS unban lors des unban des perms")
  .addField("\u200b","\u200b")
  .addField(`<a:alert:853750617657704489> **Language**`, "1.Il est conseillé d'utiliser un langage soutenu afin d'être compréhensible auprès de tous, tout manquement de langage serait passible d’un mute de 1 heure .")
  .addField("\u200b", "2. Suites au derniers évenements produit dans cette année et celle passé, tout mot raciste/homophobe sera sanctionner avec un ban perm")
  .addField("\u200b","\u200b")
  .addField(`<a:uncheck:853642739374489650> **NSFW**`, "Veuillez à ne pas poster des images violentes ou à caractère sexuelle dans les salons ou autre par sous peine de mute de 4h.", "\u200b")
  .addField(`<a:certified:853751316521680916> **Pubs**`, "Les pubs sont autorisé dans #pub-video-links-📽 // Les Pubs mp sont sanctionnées ")
  .addField(`<a:fire:853751927267524639> **Tickets**`, "Les tickets ouvert abusivement sont sanctionnable")
  .addField(`<a:kill:853752394214670416> **Harcèlement**`, "En cas de harcèlement/cyber-harcèlement, n'hésitez pas à nous contacter par MP ou sur le serveur dans le salon #problème-🙁💢.")
  .setColor('RANDOM')
  .setTimestamp();

  message.channel.send(embed);
};

exports.help = {
  name: 'rules'
};