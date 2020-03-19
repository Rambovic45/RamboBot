const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "r!";
var min = 25
var max = 500
var random = new function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

client.login(" Utiliser pas mon token :) ")

client.on("message", message => {
    if(!message.guild)
    if(message.content === prefix + "TFQ"){
        message.reply("Je vais voir mon père tu fait quoi toi ?(Tu a 12000ms pour répondre)");
        setTimeout(function(){

        }, 12000);
        message.reply("ok");
        
    }
})

client.on("message", message => {
    if(!message.guild) return
    if(message.content === prefix + "help"){
        message.channel.send("Les **commendes** du bots");
        message.channel.send("Le Préfixte = `r!` ");
        message.channel.send("**AUTRE**");
        message.channel.send("- `r!help` *Pour afichée ceci*");
        message.channel.send("**FUN**");
        message.channel.send("- `r!TFQ` *Commandes INUTILE*");
        message.channel.send("**ADV**")
        message.channel.send("- r!start pour commencée ton aventure")
    }
})

client.on("message", message => {
    if(!message.guild) return
    if(message.content === prefix + "start"){
        message.reply("salut ton aventure commence fait r!mine");
    }
})

client.on("message", message => {
    if(!message.guild) return
    if(message.content === prefix + "mine"){
        message.reply("Tu a réquolter " + random + " !");
        
    }
})
