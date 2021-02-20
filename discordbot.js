const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if (msg.content === '!status') {
    msg.channel.send('!status');
  }
});

client.login(token);
