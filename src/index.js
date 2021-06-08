const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Bot iniciado como: ${client.user.tag}!`);
    client.user.setPresence ({status:"dnd"});
    
    client.user.setActivity("Ruido a mate"); 
    
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});




  
client.login("ODQ5ODY2NTMxMjEwNTI2ODAy.YLhZ4g._OBiEnA0-7F4rh4xHpVht4syrP4");