const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require('./src/config/config.json');
var ip = 'YOUR_IP' //variable IP

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.on('ready', () => {
    console.log(`Bot iniciado como: ${client.user.tag}!`);
    
    client.user.setActivity("YOUR_ACTIVITY"); 
    
});

// ip

client.on('message', msg => {
    let {guild} = msg;
    mensaje = msg.content.split(" ");
    if (mensaje[0] === (prefix + 'ip')){
    const dirIp = new Discord.MessageEmbed()
    .setColor('#42993e')
    .setTitle('BES™')
    .addFields(
        { name: '**¿Como ingreso al servidor?**', value: 'Conectate mediante consola (**F8**)'},
        { name: '**IP del servidor**', value: ip },
    )
    .setFooter('Developed By BES™', 'https://media.discordapp.net/attachments/814889223966162954/856929194449567784/logo.png?width=663&height=663');
    msg.delete({ timeout: 800 })
    msg.channel.send(dirIp)
    }

    // on

    if (mensaje[0] === (prefix + 'on')) {
    	if (msg.member.roles.cache.some(r => ["Fundador"].includes(r.name))) {
    		const info = new Discord.MessageEmbed()
    		.setAuthor('BES™', 'https://media.discordapp.net/attachments/814889223966162954/856929194449567784/logo.png?width=663&height=663')
    		.setThumbnail('https://media.discordapp.net/attachments/814889223966162954/857679277741703198/server-database-pngrepo-com.png')
            .setColor('#5fc15a')
            .setTitle('El servidor se encuentra Online')
            .addFields(
                { name: '**¿Como ingreso al servidor?**', value: 'Conectate mediante consola (**F8**)'},
                { name: '**IP del servidor**', value: ip },
            )
			.setTimestamp()
            .setFooter('Developed By BES™', 'https://media.discordapp.net/attachments/814889223966162954/856929194449567784/logo.png?width=663&height=663');
        	msg.channel.send(info);
        	msg.delete({ timeout: 800 })
        	msg.channel.send('@everyone');
        }else {
        	msg.reply('No sos Administrador para utilizar este comando')
        }
    }

    // mantenimiento

    if (mensaje[0] === (prefix + 'mantenimiento')) {
    	if (msg.member.roles.cache.some(r => ["Fundador"].includes(r.name))) {
    		const info = new Discord.MessageEmbed()
    		.setAuthor('BES™', 'https://media.discordapp.net/attachments/814889223966162954/856929194449567784/logo.png?width=663&height=663')
    		.setThumbnail('https://media.discordapp.net/attachments/814889223966162954/857679284168949760/server-database-pngrepo-cyjjyjyjom.png')
            .setColor('#f7dc53')
            .setTitle('El servidor se encuentra en mantenimiento')
           	.setDescription('El equipo de desarrollo se encuentra en estos momentos realizando un mantenimiento al servidor, avisaremos cuando vuelva a estar en funcionamiento, **ATTE: Staff** ')
			.setTimestamp()
            .setFooter('Developed By BES™', 'https://media.discordapp.net/attachments/814889223966162954/856929194449567784/logo.png?width=663&height=663');
        	msg.channel.send(info);
        	msg.delete({ timeout: 800 })
        	msg.channel.send('@everyone');
        }else {
        	msg.reply('No sos Administrador para utilizar este comando')
        }
    }

    // off

    if (mensaje[0] === (prefix + 'off')) {
    	if (msg.member.roles.cache.some(r => ["Fundador"].includes(r.name))) {
    		const info = new Discord.MessageEmbed()
    		.setAuthor('BES™', 'https://media.discordapp.net/attachments/814889223966162954/856929194449567784/logo.png?width=663&height=663')
    		.setThumbnail('https://media.discordapp.net/attachments/814889223966162954/857679278798667776/server-database-pngrepo-comhfghfrtgh.png')
            .setColor('#e22a3a')
            .setTitle('El servidor se encuentra apagado')
           	.setDescription('El servidor se encuentra **OFF**, avisaremos cuando vuelvan los servicios a la normalidad **ATTE: Staff** ')
			.setTimestamp()
            .setFooter('Developed By BES™', 'https://media.discordapp.net/attachments/814889223966162954/856929194449567784/logo.png?width=663&height=663');
        	msg.channel.send(info);
        	msg.delete({ timeout: 800 })
        	msg.channel.send('@everyone');
        }else {
        	msg.reply('No sos Administrador para utilizar este comando')
        }
    }  
    
    // metodos pagos

    if (mensaje[0] === (prefix + 'metodos')) {
        if (msg.member.roles.cache.some(r => ["Fundador"].includes(r.name))) {
            const info = new Discord.MessageEmbed()
            .setAuthor('BES™', 'https://media.discordapp.net/attachments/814889223966162954/856929194449567784/logo.png?width=663&height=663')
            .setThumbnail('https://media.discordapp.net/attachments/814889223966162954/857791872582942780/payment-method-bank-pngrepo-com.png')
            .setColor('#00ff04')
            .setTitle('Métodos de pago donaciones')
            .addFields(
                { name: '**PayPal**', value: '```YOUR_PAYMENT_METHOD```'},
                { name: '**Mercado Pago**', value: '```YOUR_PAYMENT_METHOD```'},
            )
            .setTimestamp()
            .setFooter('Developed By BES™', 'https://media.discordapp.net/attachments/814889223966162954/856929194449567784/logo.png?width=663&height=663');
            msg.channel.send(info);
            msg.delete({ timeout: 800 })
        }else {
            msg.reply('No sos Administrador para utilizar este comando')
        }
    }
});

client.login(token);

