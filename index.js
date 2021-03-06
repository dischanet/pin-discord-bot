const Discord = require("discord.js");
const process = require("process");

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  } else if (msg.content === "pininfo") {
    msg.reply("ピン留めくん - ピン留めBOT made by Dischanet Team");
  }
});

client.on("messageReactionAdd", reacta => {
  if (reacta.emoji.name === "pushpin") {
    if (reacta.message.pinnable) {
      reacta.message.pin();
    } else {
      reacta.message.channel.send(
        "メッセージをピン留めする権限を持っていません。サーバ管理者に依頼して`メッセージの管理`権限を付与してください。"
      );
    }
  }
});

client.on("messageReactionRemove", reactr => {
  if (reactr.emoji.name === "pushpin") {
    if (reactr.message.pinnable) {
      reactr.message.unpin();
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
