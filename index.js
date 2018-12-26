const Discord = require('discord.js');
const process = require('process');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  } else if (msg.content === 'pininfo') {
    msg.reply('ピン留めくん - ピン留めBOT made by Dischanet Team');
  }
});

client.login(process.env['DISCORD_BOT_TOKEN']);
