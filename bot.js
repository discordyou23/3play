const Discord = require('discord.js');
const client = new Discord.Client();
const prefix ="F";
client.on('ready', () => {
    console.log('I am ready!');
});




client.on('ready', () => {                           
client.user.setGame(`Fhelp`,'https://www.twitch.tv/fofodiscord');                                                                                                                                                                                                                                                                                                                                                                                                                            
});






client.login(process.env.BOT_TOKEN);
