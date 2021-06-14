const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

client.login("NzM5ODE0OTAwNDAyMDk0MTIx.Xyf8UQ.8T2X7XB3mNiSbHvJIK6yE81rDug");

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
    if (error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune Commande trouvée !");

    commandes.forEach((f) => {

        let commande  = require(`./Commandes/${f}`);
        console.log(`${f} Commandes chargées !`);

    client.commands.set(commande.help.name, commande);
    });

});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} Events chargées !`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`)
        const event = f.split(".")[0]

    client.on(event, events.bind(null, client))
    })
});

client.on('messageReactionAdd', async(reaction, user) => {
    const message = reaction.message;
    const member = message.guild.members.cache.get(user.id);

    if(user.bot) return;

    if(
        ["🎫"].includes(reaction.emodji.name)

    ) {
        switch(reaction.emodji.name) {
            case "🎫":
            console.log('Yes')

            brake;
        }
    }
})

module.exports.help = {
    name: 'cmd'
};