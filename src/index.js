const Discord = require('discord.js-selfbot-v13');
const { Client, MessageEmbed, Intents } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: true, });
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
