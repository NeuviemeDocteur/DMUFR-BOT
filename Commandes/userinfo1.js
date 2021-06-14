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
    const avatar = memuser.displayAvatarURL({size: 1024, dynamic: true});

    message.channel.send({
        embed: {
            color: 0xff8400,
            title: `<a:discord:853749867369463818> Informations de l'utilisateur : **${membre.user.tag}**`,
            thumbnail: {
                url: avatar
            },
            fields: [
                {
                name: `<a:working:853991495157022811> ID :`,
                value: membre.id
                },
                {
                    name: ":calendar_spiral: compte crée le :",
                    value: moment.utc(membre.user.createdAt).format("LLL")
                },
                {
                    name: ":video_game: Joue à :",
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Aucun Jeu"}`
                },
                {
                    name: `:calendar_spiral: A rejoin le serveur depuis le :`,
                    value: moment.utc(membre.joinedAt).format("LLL")
                },
                {
                    name: `<a:check2:831625519455928343> Status:`,
                    value: `${membre.presence.status}`
                },
                {
                    name: `<a:certified:853751316521680916> Rôles:`,
                    value: `${membre.roles.cache.map(roles => `${roles.name}`).join(', ')}`
                },
            ],
            footer: {
                text: `Informations de l'utilisateur ${membre.user.username}`
            }
        }
    })
});

module.exports.help = {
    name: "userinfo"
}