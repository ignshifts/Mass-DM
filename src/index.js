const Discord = require('discord.js');
const { Client, MessageEmbed, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
require('dotenv').config();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
if(message.content == '!dm') {
const guild = client.guilds.cache.get('GUILD ID HERE');
try {

guild.members.fetch().then(async (member) => {
    member.forEach(async (member) => {
        if(member.user.id === client.user.id) return;
        member.send('Hello.').then(() => { console.log('Sent message to: ' + member.user.tag) }).catch(() => { console.log('Failed to send message to: ' + member.user.tag) })
    });
});
} catch (error) {
    console.error(error);
}

}});

client.login(process.env.TOKEN);