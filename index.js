let Discord = require('discord.js');
let bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
});

bot.on('message', message => {
    const args = message.content.slice(1).trim().split(/ +/g);
    const aut = message.guild.members.find('id',message.author.id);
    if (message.content.startsWith("-start")) {
        message.guild.createChannel(aut.roles.find('hexColor',"#9033ca"),'category',[{
            deny: ['SEND_MESSAGES','READ_MESSAGES','VIEW_CHANNEL'],
            allow: []
        }]).then(channel => {
            channel.overwritePermissions(aut.roles.find('hexColor',"#9033ca"),{
                SEND_MESSAGES: true,
                READ_MESSAGES: true,
                VIEW_CHANNEL: true
            })
        });
    }
});

bot.login(process.env.TOKEN);