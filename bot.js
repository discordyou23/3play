const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});



client.on('ready', () => {
client.user.setGame(`لبيك الله هم لبيك |عيد الأضحى قرب`);
});



client.login(process.env.BOT_TOKEN);
