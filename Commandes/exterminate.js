const Discord = require('discord.js');
const { title } = require('process');
const { MessageEmbed } = require('discord.js');
const attachment = new Discord
                      .MessageAttachment('./images/exterminate.gif', 'exterminate.gif');


exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
  .attachFiles(attachment)
  .setImage('attachment://exterminate.gif')

  message.channel.send(embed);
};

exports.help = {
  name: 'exterminate'
};