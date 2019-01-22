const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
});

bot.on("guildMemberAdd", member => {
    member.addRole(bot.guilds.find('name',"Escape Game").roles.find('name',"Nouveau"));    
});

bot.on('message', (message) => {
    if (message.content.startsWith("-")) {

    }
});

bot.login(process.env.TOKEN);