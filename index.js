const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
});

bot.on("guildMemberAdd", member => {
    member.addRole(bot.guilds.find('name',"Escape Hub").roles.find('name',"Nouveau"));    
});

bot.on('message', (message) => {
    let serv = bot.guilds.find('name',"Escape Hub");
    let member = serv.members.find('id',message.author.id);
    if (message.content == "-ready") {
        if (member.roles.exists('name',"Nouveau")) {
            member.send("Vouc êtes devenu un membre.");
            member.addRole(serv.roles.find('name',"Membre"));
            member.removeRole(serv.roles.find('name',"Nouveau"));
            message.delete();
        } else {
            message.delete();
        }
    }
    if (message.content == "-partenariat") {
        message.delete();
        member.send({embed : {
            hexColor : "#0B1DA8",
            author: {
                name: "Partenariat",
                icon_url: bot.user.avatarURL
            },
            fields: [{
                name: "Comment faire un partenariat ?",
                value: "C'est très simple, il suffit d'envoyer votre fiche à un administrateur en ayant rempli les champs demandés.\nA la suite de celà, votre fiche sera publiée, ou non si il y a des problème avec celle-ci."
          }]
        }});
    }
    if (message.content == "-vote") {
        message.delete();
        message.channel.send("Vos notes pour ce serveur ?").then(mes => mes.react('553697369254789140'));
    }
});

bot.login(process.env.TOKEN);
