const Discord = require('discord.js');
const { title } = require('process');
const { MessageEmbed } = require('discord.js');
const attachment = new Discord
                      .MessageAttachment('./images/euro2020.gif', 'euro2020.gif');


exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
  .attachFiles(attachment)
  .setImage('attachment://euro2020.gif')

  message.channel.send(embed);
};

exports.help = {
  name: 'euro2020'
};