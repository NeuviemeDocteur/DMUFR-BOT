const Discord = require('discord.js');
const moment = require('moment');
const { title } = require('process');

module.exports.run = (async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    const memuser = message.mentions.users.first() || message.member.user;
    //if (!membre) return message.channel.send(`:x: Veillez Mentionner un utilisateur ! `)
    const memb = message.guild.member(membre);
    let user;
    const av = message.guild;
    const avatar = memuser.displayAvatarURL({size: 2048, dynamic: true});

    message.channel.send({
        embed: {
            color: 0xff8400,
            title: `:muscle: Statistiques de l'utilisateur : **${membre.user.tag}**`,
            thumbnail: {
                url: avatar
            },
            fields: [
                {
                name: ":gear: ID :",
                value: membre.id
                },
                {
                    name: ":calendar_spiral: Crée le :",
                    value: moment.utc(membre.user.createdAt).format("LLL")
                },
                {
                    name: ":video_game: Joue à :",
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Aucun Jeu"}`
                },
                {
                    name: ":calendar_spiral: A rejoin le serveur depuis le :",
                    value: moment.utc(membre.joinedAt).format("LLL")
                },
            ],
            footer: {
                text: `Informations de l'utilisateur ${membre.user.username}`
            }
        }
    })
});

module.exports.help = {
    name: "stats"
}