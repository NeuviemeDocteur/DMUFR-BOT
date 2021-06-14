const Discord = require('discord.js');
const { title } = require('process');
const { MessageEmbed } = require('discord.js');
const attachment = new Discord
                      .MessageAttachment('./images/dkc19.gif', 'dkc19.gif');


exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
  .attachFiles(attachment)
  .setImage('attachment://dkc19.gif')

  message.channel.send(embed);
};

exports.help = {
  name: 'dalekkillcovid19'
};