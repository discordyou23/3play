const Discord = require('discord.js');
const client = new Discord.Client();
 const adminprefix = "F";
client.on('ready', () => {
  console.log('╔[══════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});





client.on('ready', () => {                           
client.user.setGame(`اساطير محمود رويال`,'https://www.twitch.tv/fofodiscord');                                                                                                                                                                                                                                                                                                                                                                                                                            
});



const developers = ["418418238267850752",""]
client.on('message', message => {//fofo©
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      //fofo©
  if (message.content.startsWith(adminprefix + 'sp')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {//fofo©
    message.guild.leave();        
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/fofodiscord");//fofo©
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)//fofo©
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});//fofo©





var KinG66S = {};
client.on('guildMemberRemove', member => {
KinG66S[member.id] = {roles: member.roles.array()};
});

client.on('guildMemberAdd', member => {
if(!KinG66S[member.user.id]) return;
console.log(KinG66S[member.user.id].roles.length);
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {
member.addRole(KinG66S[member.user.id].roles.shift());
}
});






client.on('ready', async() => {

var server = "224308865427046402"; // ايدي السررفر

var channel = "492357004061573136";//ايدي الروم

    setInterval(()=>{

    client.guilds.get(server).channels.get(channel).send('#أساطير محمود رويال لا تتحدوناااااا#أساطير محمود رويال لا تتحدوناااااا#أساطير محمود رويال لا تتحدوناااااا#أساطير محمود رويال لا تتحدوناااااا#أساطير محمود رويال لا تتحدوناااااا#أساطير محمود رويال لا تتحدوناااااا#أساطير محمود رويال لا تتحدوناااااا#أساطير محمود رويال لا تتحدوناااااا#أساطير محمود رويال لا تتحدوناااااا#أساطير محمود رويال لا تتحدوناااااا')

    },305);

})




client.login(process.env.BOT_TOKEN);
