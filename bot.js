const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "F";
client.on('ready', () => {
    console.log('I am ready!');
});



client.on('ready', () => {
client.user.setGame(`Fhelp`,'https://www.twitch.tv/v5bz');
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "embed") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x06DF00)
    message.channel.sendEmbed(say);
    message.delete();
  }
  });
  
  
  client.on('message', message => {
     if (message.content === "Fping") {
      const embed = new Discord.RichEmbed()

  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
 
  message.channel.sendEmbed(embed);
    }
});



client.login(process.env.BOT_TOKEN);
