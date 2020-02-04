const Discord = require('discord.js');
const bot = new Discord.Client();

var messageCount = {
    "Anubhav": 0,
    "Nabil": 0,
    "Adrian": 0,
    "Mitchell": 0,
    "David": 0
};

var yeetCount = {
    "Anubhav": 0,
    "Nabil": 0,
    "Adrian": 0,
    "Mitchell": 0,
    "David": 0
};

bot.on('ready', () => {
    console.log('nabil-bot started.');
});

bot.on('message', message => {
    if(!message.author.bot) {
        var mention = message.author.id;

        if(mention == "240833127713472513") {
            messageCount["Anubhav"]++;

            if(message.content.toLowerCase().includes("yeet")) {
                yeetCount["Anubhav"]++;
            }
        } else if (mention == "273984641323761665") {
            messageCount["Nabil"]++;
            if(message.content.toLowerCase().includes("yeet")) {
                yeetCount["Nabil"]++;
            }
        } else if(mention == "612002163819937831") {
            messageCount["Adrian"]++;
            if(message.content.toLowerCase().includes("yeet")) {
                yeetCount["Adrian"]++;
            }
        } else if(mention == "447388816135815168") {
            messageCount["Mitchell"]++;
            if(message.content.toLowerCase().includes("yeet")) {
                yeetCount["Mitchell"]++;
            }
        } else if(mention == "459920893892624406") {
            messageCount["David"]++;
            if(message.content.toLowerCase().includes("yeet")) {
                yeetCount["David"]++;
            }
        }
    }

    if(message.content == "Nabil, help") {
        var random = Math.random();

        if(random < 0.80) {
            message.channel.send("Check your DM's :wink:");
            message.author.send("brb");
        } else {
            message.channel.send("nah im good");
        }
    } else if(message.content == "Nabil, what do I do?") {
        message.channel.send("idk, I guess you're just screwed.");
    } else if(message.content.includes(":nabilsucks:")) {
        message.channel.send(":frowning:");
        message.author.send("It has come to my attention that you are being mean. As such, you will be terminated in the next " + parseInt(Math.random() * 10 + 1) + " seconds.");
    } else if(message.content.startsWith("Nabil, conduct a background check on")) {
        console.log("Conducting background check");
        var member = message.mentions.members.first();

        if(member == null) {
            message.channel.send("bruh you never told me who")
            return;
        } else if(!member.user.bot) {
            var mention = member.id;

            message.channel.send("Aight, I'll see what I can find.");
            message.channel.startTyping();

            //member properties
            var joinedAt = member.joinedAt;
            var lastMessage = member.lastMessage;
            var nickname = member.nickname;

            //user properties
            var user = member.user;
            var createdAt = user.createdAt;
            var createdTimestamp = user.createdTimestamp;
            var username = user.username;


            setTimeout(() => {
                var output = "";
                output += "Joined server at: " + joinedAt + "\n";
                output += "Last message was: " + lastMessage + "\n";
                output += "Nickname is: " + nickname + "\n";
                output += "Created account at: " + createdAt + " " + createdTimestamp + "\n";
                output += "Their real name is: " + username;
                
                

                setTimeout(() => {
                    message.channel.send(output);
                    message.channel.send("I couldn't find much cause I was doing college apps.");
                    message.channel.send("nearly finished though, I think I only have " + parseInt(Math.random() * 25 + 25) + " more to go! :partying_face: ");
                    
                    setTimeout(() => {
                        if(mention == "240833127713472513") {
                            message.channel.send("Oh yeah, they've also said " + messageCount["Anubhav"] + " things on the server ever since I started existing.");
                        } else if (mention == "273984641323761665") {
                            message.channel.send("Oh yeah, they've also said " + messageCount["Nabil"] + " things on the server ever since I started existing.");
                        } else if(mention == "612002163819937831") {
                            message.channel.send("Oh yeah, they've also said " + messageCount["Adrian"] + " things on the server ever since I started existing.");
                        } else if(mention == "447388816135815168") {
                            message.channel.send("Oh yeah, they've also said " + messageCount["Mitchell"] + " things on the server ever since I started existing.");
                        } else if(mention == "459920893892624406") {
                            message.channel.send("Oh yeah, they've also said " + messageCount["David"] + " things on the server ever since I started existing.");
                        }
                    }, 3000);
                    
                }, 3000);
            }, 5000);

            message.channel.stopTyping();
            
        } else {
            message.channel.send("nice try");
        }
    } else if(message.content == "Nabil, show the yeet status") {
        message.channel.send("Yeet status:\nAnubhav: " + yeetCount["Anubhav"] + " yeets\nNabil: " + yeetCount["Nabil"] + " yeets\nAdrian: " + yeetCount["Adrian"] + " yeets\nMitchell: " + yeetCount["Mitchell"] + " yeets\nDavid: " + yeetCount["David"] + " yeets\nNabil (the human one): :hitting_a_yeet: ");
    }
});

bot.login(process.env.BOT_TOKEN);
