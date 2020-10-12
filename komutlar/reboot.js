const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Yeterli yetkiniz yok");

  message.channel.sendMessage(`Başarılı! Bot yeniden başlatıldı...`);
  message.delete(60).then(msg => {
    console.log(`✅ | Bot Yeniden Başlatıldı...`);

    process.exit(0);
  });
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r", "reboot", "yenile", "yeniden başlat"],
  permLevel: 3
};

module.exports.help = {
  name: "reboot",
  description: "",
  usage: "reboot"
};
