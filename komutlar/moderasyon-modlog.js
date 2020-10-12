const Discord = require('discord.js')
const db = require('quick.db')
//MaximusBoys
exports.run = async(client, message, args) => {
  //MaximusBoys
if (!message.member.hasPermission("ADMINISTRATOR")) 
return message.channel.send(`Bu Komutu Kullanabilmek İçin **"\`Yönetici\`"** Yetkisine Sahip Olmalısın.`);
//MaximusBoys
let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`codeminglog_${message.guild.id}`)
  //MaximusBoys
if (args[0] === "sıfırla" || args[0] === "kapat") {
  //MaximusBoys
if(!logkanal) return message.channel.sendEmbed(new Discord.MessageEmbed()
    //MaximusBoys                                           
.setDescription(`Mod-Log kanalı zaten ayarlı değil!`)
.setColor("RED"));
   //MaximusBoys
db.delete(`codeminglog_${message.guild.id}`)
  //MaximusBoys
message.channel.sendEmbed(new Discord.MessageEmbed()
   //MaximusBoys                       
.setDescription(`Mod-Log Kanalı başarıyla sıfırlandı.`)
.setColor("GREEN"));
//MaximusBoys
return
}
  //MaximusBoys
if (!logk) return message.channel.sendEmbed(new Discord.MessageEmbed()
.setDescription(`Mod-Log kanalı belirt!`)
.setColor("RED"));
 //MaximusBoys
//MaximusBoys
db.set(`codeminglog_${message.guild.id}`, logk.id)
//MaximusBoys
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Mod-Log kanalı başarıyla ${logk} olarak ayarlandı.`)
.setColor("GREEN"));

console.log(`Mod-log komutu ${message.author.username} Tarafından kullanıldı`)
};
//MaximusBoys
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog'],
    permLevel: 0 
};
//MaximusBoys
exports.help = {
    name: 'modlog',
    description: 'lrowsv12',
    usage: 'modlog'
};