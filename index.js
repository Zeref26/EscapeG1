const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
});

bot.on("guildMemberAdd", member => {
    member.addRole(bot.guilds.find('name',"Escape Game").roles.find('name',"Nouveau"));    
});

bot.on('message', (message) => {
    let serv = bot.guilds.find('name',"Escape Game");
    let member = serv.members.find('id',message.author.id);
    if (message.content.startsWith("-ready")) {
        if (member.roles.exists('name',"Nouveau")) {
            member.send("Vouc êtes devenu un membre.");
            member.addRole(serv.roles.find('name',"Membre"));
            member.removeRole(serv.roles.find('name',"Nouveau"));
            message.delete();
        } else {
            message.delete();
        }
    }
});

bot.login(process.env.TOKEN);