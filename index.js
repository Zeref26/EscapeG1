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
                    bot.channels.find('id',"555721032833433630").send(aut.roles.find('hexColor',"#9033ca").name+" : 0");
                    setTimeout(function() {
                        bot.channels.get("555721032833433630").fetchMessages({limit:99}).then(messages => {
                            messages.forEach((msg)=> {
                                if (msg.content.includes(aut.roles.find('hexColor',"#9033ca").name)) {
                                    msg.delete();
                                }
                            });
                        });
                        channel.delete();
                        chan.delete();
                    }, 1000*60);
                });
            });
        } else {
            message.channel.send("Vous n'êtes dans aucun groupe");
        }
    }
    if (message.content.startsWith("-melange")) {
        let prog = "";
        bot.channels.get("555721032833433630").fetchMessages({limit:99}).then(messages => {
            messages.forEach((msg)=> {
                if (msg.content.includes(aut.roles.find('hexColor',"#9033ca").name)) {
                    for (let i = 4; i<msg.content.length; i++) {
                        if (msg.content.charAt(i)==':') {
                            for (let j = i+2; j<msg.content.length; j++) {
                                prog += msg.content.charAt(j);
                            }
                        }
                    }
                    if (parseInt(prog)=="0") {
                        if (args[1].toLowerCase() == "fer") {
                            message.channel.send("Une chose verte apparait dans le flacon.");
                        }
                        if (args[1].toLowerCase() == "argent") {
                            message.channel.send("Une chose brune apparait dans le flacon.");
                        }
                        if (args[1].toLowerCase() == "cuivre") {
                            message.channel.send("Une chose bleue apparait dans le flacon.");
                        }
                        msg.edit(aut.roles.find('hexColor',"#9033ca").name+" : 1");
                    } else {
                        message.channel.send("Cete étape a déjà été effectuée.");
                    }
                }
            });
        });
    }
    if (message.content.startsWith("-aimant")) {
        let prog = "";
        bot.channels.get("555721032833433630").fetchMessages({limit:99}).then(messages => {
            messages.forEach((msg)=> {
                if (msg.content.includes(aut.roles.find('hexColor',"#9033ca").name)) {
                    for (let i = 4; i<msg.content.length; i++) {
                        if (msg.content.charAt(i)==':') {
                            for (let j = i+2; j<msg.content.length; j++) {
                                prog += msg.content.charAt(j);
                            }
                        }
                    }
                }
            });
        });
        if (args[1].toLowerCase()=="1") {
            message.channel.send("La canette ne bouge pas.");
        } else if (args[1]=="2") {
            message.channel.send("La canette se fixe à l'aimant.");
        }
    }
});

bot.login(process.env.TOKEN);