const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');

process.setMaxListeners(0);

require("moment-duration-format");

exports.run = async (bot, message, args) => {
  
  const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
  const istatistikler = new Discord.RichEmbed()
  
  .setColor('BLACK')
  
  .setFooter('Digna Bot!', bot.user.avatarURL)
  
  .addField("» **Botun Sahibi**", "**__ɱႦ Monster#0007 - 🍍 | °°°𝕐𝕦𝕟𝕦𝕤.𝔼𝕩𝔼°°°#0061 - !404™Woo Geldi !#0001")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", seksizaman)
  .addField("» **Kullanıcılar**" , bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
.setFooter("Digna'nın İstatistikleri")  
  return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-bilgi', 'bilgi', 'botbilgi'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "yunusexe",
  usage: "istatistik"
};