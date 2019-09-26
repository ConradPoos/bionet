const { Client, RichEmbed } = require('discord.js');
const bot = new Client();
let queue = {};
const ytsearch = require("youtube-search");
const ytinfo = require("youtube-info");
const ytdl = require("ytdl-core");
const {queryMember, clockify} = require("./util.js");
process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);
bot.on("error", process.exit);






bot.on('message', async (message) => {        
    let prefix = "bn!";
  const [cmd, ...args] = message.content.split(/\s+/g);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
    

    var rngfood = 0;

if(cmd === `${prefix}help`) {
  
  let embed = new RichEmbed()
      
      .setTitle("Help commands")
      .setColor(3447003)
      .addField("bn!help", "Shows this menu")
      .addField("bn!server", "Shows information about the current server")
      .addField("bn!faq", "Lists some FAQ's about the bot")
      .addField("bn!purge", "Clears the specified amount of messages. Author must have permission: Manage Messages")
      .addField("bn!credits", "Shows who is/has worked on bioNET")
      .addField("bn!food", "Randomly gives you a nice little food emoji")
      .addField("bn!yee", "no")
      .setFooter("bioNET made by Spork#3479")
    message.channel.send(embed);
  }
  
  
if(cmd === `${prefix}server`) {
  let embed = new RichEmbed()
  .setTitle("Server information")
  .setColor(3447003)
  .addField("Server owner:", message.guild.owner)  
  .addField("Member count:", message.guild.memberCount)
  .addField("Created on", message.createdAt)
  .setFooter("bioNET made by Spork#3479")
  
  message.channel.send(embed);
}
  
  

  
  
  
  if(cmd === `${prefix}faq`) {
    let embed = new RichEmbed()
    .setTitle("bioNET FAQ")
    .setColor(3447003)
    .addField("What is bioNET?", "bioNET is a general moderation bot, having some fun extra miscellaneous commands aswell to keep you entertained!")
    .addField("Is there a server for bioNET?", "Yes, and you can find it [here.](https://discord.gg/M86cApp)")
    .addField("Can I help with bioNET?", "Sure you can! In the server you can give us feedback and tell us what your experience with bioNET was!")
    .addField("Is there a way to donate?", "Not yet, but in the future there will probably be a patreon to help support development of bioNET.")
    .setFooter("bioNET made by Spork#3479")
    
    message.channel.send(embed);
  }
    
  
  
  if(cmd === `${prefix}userinfo`) {
    if (!message.mentions.users.size) {
    let embed = new RichEmbed()
    .setTitle("User Info")
    .setColor(3447003)
    .addField("Name", message.author.tag)
    .addField("Account Created", message.author.createdAt)
    .setFooter("bioNET made by Spork#3479")
    
    message.channel.send(embed);
    }} 
  
 
  
  
  
  
  
if(cmd === `${prefix}purge`) {
  if(message.member.hasPermission("MANAGE_MESSAGES")) {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100");
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }}
  
  
  
  if(cmd === `${prefix}credits`) {
      let embed = new RichEmbed()
      .setTitle("Credits")
      .setColor(3447003)
      .addField("Founder/Lead Developer", "Spork#3479")
      .addField("Additional Developers", "Pixlfyre#0416, Daichi15#1295")
      .addField("Retired Developer", "Tech#9818")
      .setFooter("bioNET made by Spork#3479")
      message.channel.send(embed);
  }
      
      
  if(cmd === `${prefix}yee`) {
      let embed = new RichEmbed()
      .setTitle("excuse me what")
      .setColor(3447003)
      .addField("no please stop", "no")
      .setFooter("bioNET made by Spork#3479")
      message.channel.send(embed);
  }
  
    if(cmd === `${prefix}food`) {
     var rngfood = Math.floor(Math.random() * 11) 
     if(rngfood === 0) {
        message.channel.send(":pizza:");   
     }
      if(rngfood === 1) {
        message.channel.send(":hamburger:");   
     }
      if(rngfood === 2) {
        message.channel.send(":doughnut:");   
     }
      if(rngfood === 3) {
        message.channel.send(":apple:");   
     }
      if(rngfood === 4) {
        message.channel.send(":fries:");   
     }
      if(rngfood === 5) {
        message.channel.send(":bread:");   
     }
      if(rngfood === 6) {
        message.channel.send(":watermelon:");   
     }
      if(rngfood === 7) {
        message.channel.send(":grapes:");   
     }
      if(rngfood === 8) {
        message.channel.send(":avocado:");   
     }
      if(rngfood === 9) {
        message.channel.send(":cookie:");   
     }
      if(rngfood === 10) {
        message.channel.send(":chocolate_bar:");   
     }
  }
  
    if(cmd === `${prefix}transport`) {
    var rngvehicle = Math.floor(Math.random() * 11) 
     if(rngvehicle === 0) {
        message.channel.send(":red_car:");   
     }
      if(rngvehicle === 1) {
        message.channel.send(":taxi:");   
     }
      if(rngvehicle === 2) {
        message.channel.send(":motorbike:");   
     }
      if(rngvehicle === 3) {
        message.channel.send(":helicopter:");   
     }
      if(rngvehicle === 4) {
        message.channel.send(":oncoming_bus:");   
     }
      if(rngvehicle === 5) {
        message.channel.send(":rocket:");   
     }
      if(rngvehicle === 6) {
        message.channel.send(":truck:");   
     }
      if(rngvehicle === 7) {
        message.channel.send(":airplane:");   
     }
      if(rngvehicle === 8) {
        message.channel.send(":avocado:");   
     }
      if(rngvehicle === 9) {
        message.channel.send(":motorboat:");   
     }
      if(rngvehicle === 10) {
        message.channel.send(":tractor:");   
     }
    }
    
   
  
  
  
  
  
  
  
  
  bot.on("ready", async () => {
    console.log("[Bot] : Successful Launch...");
setInterval(() => {
bot.user.setPresence(
{
   status: 'online',
   game:
   {
       name: `<!help> <${bot.users.size} people using BioNET> <Currently on ${bot.guilds.size} servers>`
   }
});
}, 100000);
});


  
});
bot.login(process.env.token);
