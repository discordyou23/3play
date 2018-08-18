const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
});



client.on('ready', () => {
client.user.setGame(`لبيك الله هم لبيك |عيد أضحى مبارك قريبا`,'https://www.twitsh.tv/fofodiscord');
});



client.login(process.env.BOT_TOKEN);
