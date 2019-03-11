let Discord = require('discord.js');
let bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
});

bot.on('message', message => {
    const args = message.content.slice(1).trim().split(/ +/g);
});

bot.login(process.env.TOKEN);