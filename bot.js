const Discord = require('discord.js');
const client = new Discord.Client();
//fofo




client.on('ready', () => {
    console.log('I am ready!');
});





client.on('ready', () => {                           
client.user.setGame(`Minecraft`);                                                                                                                                                                                                                                                                                                                                                                                                                            
});

client.on('ready',async () => {
  client.channels.find(ch => ch.id === "512645660600827915" && ch.type === 'voice').join();
});





client.login(process.env.BOT_TOKEN);`












