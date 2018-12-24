const { Client, RichEmbed } = require('discord.js')
const bot = new Client();

bot.on('message', async (message) => {        
    let prefix = "bn!";
  const [cmd, ...args] = message.content.split(/\s+/g);

    var rngfood;

if(cmd === `${prefix}help`) {
  
  let embed = new RichEmbed()
      
      .setTitle("Help commands")
      .setColor(3447003)
      .addField("bn!help", "Shows this menu")
      .addField("bn!server", "Shows information about the current server")
      .addField("bn!faq", "Lists some FAQ's about the bot")
      .addField("bn!purge", "Clears the specified amount of messages. Author must have permission: Manage Messages")
      .addField("bn!credits", "Shows who is/has worked on bioNET")
      .addField("bn!yee", "no")
      .setFooter("bioNET made by ConradPoos#0597")
    message.channel.send(embed);
  }
  
  
if(cmd === `${prefix}server`) {
  let embed = new RichEmbed()
  .setTitle("Server information")
  .setColor(3447003)
  .addField("Server owner:", message.guild.owner)  
  .addField("Member count:", message.guild.memberCount)
  .addField("Created on", message.createdAt)
  .setFooter("bioNET made by ConradPoos#0597")
  
  message.channel.sendMessage(embed);
}
  
  

  
  
  
  if(cmd === `${prefix}faq`) {
    let embed = new RichEmbed()
    .setTitle("bioNET FAQ")
    .setColor(3447003)
    .addField("What is bioNET?", "bioNET is a general moderation bot, having some fun extra miscellaneous commands aswell to keep you entertained!")
    .addField("Is there a server for bioNET?", "Yes, and you can find it [here.](https://discord.gg/M86cApp)")
    .addField("Can I help with bioNET?", "Sure you can! In the server you can give us feedback and tell us what your experience with bioNET was!")
    .addField("Is there a way to donate?", "Not yet, but in the future there will probably be a patreon to help support development of bioNET.")
    .setFooter("bioNET made by ConradPoos#0597")
    
    message.channel.sendMessage(embed);
  }
    
  
  
  if(cmd === `${prefix}userinfo`) {
    if (!message.mentions.users.size) {
    let embed = new RichEmbed()
    .setTitle("User Info")
    .setColor(3447003)
    .addField("Name", message.author.tag)
    .addField("Account Created", message.author.createdAt)
    
    message.channel.sendMessage(embed);
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
      .addField("Lead Developer/Creator", "Conrad#0597")
      .addField("Additional Developers", "Pixlfyre#0416, Daichi15#1295")
      .addField("Retired Developer", "Tech#9818")
      .setFooter("bioNET made by Conrad#0597")
      message.channel.sendMessage(embed);
  }
      
      
  if(cmd === `${prefix}yee`) {
      let embed = new RichEmbed()
      .setTitle("excuse me what")
      .setColor(3447003)
      .addField("no please stop", "no")
      .setFooter("bioNET made by Conrad#0597")
      message.channel.sendMessage(embed);
  }
  
    if(cmd === `${prefix}food`) {
     var rngfood = Math.floor(Math.random() * 11) 
     if rngfood = 0 {
        message.channel.send(":pizza:")   
     }
      if rngfood = 1 {
        message.channel.send(":hamburger:")   
     }
      if rngfood = 2 {
        message.channel.send(":doughnut:")   
     }
      if rngfood = 3 {
        message.channel.send(":apple:")   
     }
      if rngfood = 4 {
        message.channel.send(":fries:")   
     }
      if rngfood = 5 {
        message.channel.send(":bread:")   
     }
      if rngfood = 6 {
        message.channel.send(":watermelon:")   
     }
      if rngfood = 7 {
        message.channel.send(":grapes:")   
     }
      if rngfood = 8 {
        message.channel.send(":avocado:")   
     }
      if rngfood = 9 {
        message.channel.send(":cookie:")   
     }
      if rngfood = 10 {
        message.channel.send(":chocolate_bar:")   
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
