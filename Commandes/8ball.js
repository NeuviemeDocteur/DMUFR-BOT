module.exports.run = async (bot, msg, args) => {
    const awnser = ["Oui !", "Personellement je sais pas :/", "Oh que non !", "Nul.", "Bah, je préfère, heu bah...", `9e_Docteur, j'crois qui'il faut ban`, "Hum, tu m'insulte là ?", "Mais Oui biensur comme par hasard", "'-'", "sérieusement ?", `./ban`, `nan '-'`, "Biensur !", "Moauis '-'", "Ish Bind DMU FR", "**YOU LOOSE !**", "**O_O**", "i will ban you, no, just kidding", "Vive la :flag_be: et ces frites :]]]]]]]]]]", "'-------------------'", "Doctor Who = FOR LIFE !!!!!!", "Pas cool '-'", ":p", "Si 9e_Docteur est le meilleur ? **BAH OUI LOL MDR **#LOLOLOLOL", "Na merci, j'veux pas d'argents '-'", "j'te kiff ``en tant que membre :p``", "Oui roooooh sava", "On force pas merci '-'", "Hum, a voir", "*O***u*i* _j___e__...", "haha", "j'aime les chats", "pervers va", "quelqu'un peut lui la faire fermer ?", "Idiots", "Espèce de petit Dalek"];
    msg.channel.send(awnser[Math.floor(Math.random() * (awnser.length - 1))]);
}

module.exports.help = {
    name: '8ball'
}