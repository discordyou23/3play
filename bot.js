const Discord = require('discord.js');
const fofo = new Discord.Fofo();
 const adminprefix = "F";
fofo.on('ready', () => {
  console.log('╔[══════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${fofo.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${fofo.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${fofo.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});





fofo.on('ready', () => {                           
client.user.setGame(`_Mr_Fawzo🍻|_I_am_Strong<_*🍺`,'https://www.twitch.tv/fofodiscord');                                                                                                                                                                                                                                                                                                                                                                                                                            
});



const developers = ["418418238267850752",""]
fofo.on('message', message => {//fofo©
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      //fofo©
  if (message.content.startsWith(adminprefix + 'sp')) {
    fofo.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {//fofo©
    message.guild.leave();        
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    fofo.user.setGame(argresult, "https://www.twitch.tv/fofodiscord");//fofo©
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  fofo.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)//fofo©
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  fofo.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});//fofo©

var KinG66S = {};
fofo.on('guildMemberRemove', member => {
fofo[member.id] = {roles: member.roles.array()};
});

client.on('guildMemberAdd', member => {
if(!fofo[member.user.id]) return;
console.log(fofo[member.user.id].roles.length);
for(let i = 0; i < fofo[member.user.id].roles.length + 1; i++) {
member.addRole(fofo[member.user.id].roles.shift());
}
});


var ServerID = "502954070449848328"; //اي دي السيرفر

var ChannelID = "502954071041507359";// اي دي الروم

/*

 //  //  //  //  //  //  //  //  //  //  //  // 

        \ /  | 

 |     /   /   |    |  //   \   \

 |    |     |  | (  <> )    |   (  <> )  |

 ||     ||   /|  //||

                                /
SPAMMMMMMM
                    ..

    _      | /||/  |  

/    \  /   /  \ /  | |  \   /  /

\     |  | /\  // // | |  ||  |   \ 

   /||      > | |||| /  >

        /             /     /               / 

     .

  /     \ ||     

 /  \ /  |  |/    /     \

/    Y    \  |   |  \  /|  | /

|  /||  /  >|

        /        /     /

*/

fofo.on('warn', console.warn);

fofo.on('error', console.error);

fofo.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By BlackSpirit','\n','ProBot credits miner is ready!'));

fofo.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

fofo.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));

function timerFunc() {//by fofodiscord

    fofo.on('message', msg => {

        fofo.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))

    });

}

var timer = setTimeout(timerFunc, 1000);

//fofo©







fofo.login(process.env.BOT_TOKEN);
