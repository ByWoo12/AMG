const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) return message.channel.send(`  **Lütfen Bir Rol Belirt!**\nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \n**__Örnek Kullanım__** : \`sayaç-ayarla #kanal <Sayı>\`\n\n**__Önemli Not!!__**: **Oto Rol'u Ayarlayabilmek İçin Botun Rolü, Verilecek Rolün Üstünde Bir Rolde Olmalı Yoksa Rolü Veremez!** `)
 
 if(!kanal) return message.channel.send(`  **Lütfen Bir Kanal Belirt!** \n**__Örnek Kullanım__** : \`otorol-ayarla @Rol #Kanal\``)
 
  message.channel.send(`
╔▬▬▬▬▬▬▬▬Digna Otorol▬▬▬▬▬▬▬▬▬
║►  Otorol Aktif Edildi.
║►  **${rol}** Olarak Güncelledim! 
║►  Kayıt Kanalını **${kanal}** Olarak Güncelledim! 
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["otorolayarla"],
  permLevel: 3
};

exports.help = {
  name: 'otorol-ayarla',
};
