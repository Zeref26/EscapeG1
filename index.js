let Discord = require('discord.js');
let bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
});

bot.on('message', message => {
    const args = message.content.slice(1).trim().split(/ +/g);
    const aut = message.guild.members.find('id',message.author.id);
    if (message.content.startsWith("-start")) {
        message.delete();
        if (aut.roles.exists('hexColor',"#9033ca")) {
            message.guild.createChannel(aut.roles.find('hexColor',"#9033ca").name,'category').then(channel => {
                channel.overwritePermissions(aut.roles.find('hexColor',"#9033ca"),{
                    SEND_MESSAGES: true,
                    READ_MESSAGES: true,
                    VIEW_CHANNEL: true
                });
                channel.overwritePermissions(message.guild.roles.find('name',"@everyone"),{
                    SEND_MESSAGES: false,
                    READ_MESSAGES: false,
                    VIEW_CHANNEL: false
                });
                message.guild.createChannel("salle de test",'text').then(chan => {
                    chan.setParent(channel);
                    chan.overwritePermissions(aut.roles.find('hexColor',"#9033ca"),{
                        SEND_MESSAGES: true,
                        READ_MESSAGES: true,
                        VIEW_CHANNEL: true
                    });
                    chan.overwritePermissions(message.guild.roles.find('name',"@everyone"),{
                        SEND_MESSAGES: false,
                        READ_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });
                });
            });
        } else {
            message.channel.send("Vous n'êtes dans aucun groupe");
        }
    }
});

bot.login(process.env.TOKEN);