const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const package = require('./package.json');
const hook = new Discord.WebhookClient('469963087072591872', 'BAPfvhNEaMDo7g6JsbuUDR1TGaK3tTcQ8tYPk33d1z8F4ud0_nVmhWDqoBBt7IVJrbEF')

client.on('ready',() => {
	console.log(`SCPFBOT ${package.version} loaded`);
});

client.on('guildDelete', guild =>{
	console.log(`I have left ${guild.name} at $(new Date()})`);
});

client.on('guildMemberAdd', member => {
	let guild = member.guild;
	guild.defaultChannel.send(`Please welcome ${member.user.username} to the server!`)
})

var prefix = ";"
client.on('message', message => {
	if (!message.content.startsWith(prefix)) return;
	let args = message.content.split(' ').slice(1);
	var argresult = args.join(' ');
	if (message.author === client.user) return;

	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.send(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
	} else

	if (message.content.startsWith(prefix + '108startup')) {
			client.channels.get('463517546403069973').send('@everyone Startup at https://www.roblox.com/games/2001105521/Area-108#!/about');
	} else
	if (message.content.startsWith(prefix + 'announce')) {
			message.channel.send(`Dispatching Announcer Bot`)
			hook.send(argresult)
	} else
	if (message.content.startsWith(prefix + 'setgame')) {
			client.user.setGame(argresult);
		} else
	if (message.content.startsWith(prefix + 'version')) {
			message.channel.send(`\`SCPFBOT ${package.version}\``);
	} else
	if (message.content.startsWith(prefix + 'amigay')) {
			message.channel.send('yes you are gay');
	} else
	if (message.content.startsWith(prefix + 'areyouparsfriend')) {
			message.channel.send('yes i am par\'s best friend')
	}







});

client.login(settings.token);
