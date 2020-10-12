
const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {


  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(` **Hey Sen** Evet Sen! Bu Komut İçin Yeterli Yetkin Yok!`)
if (!args[0])  {
    const küfürcu0k = new Discord.RichEmbed()
    .setTitle('Başarısız')
    .setDescription(` Bunumu Arıyorsun? \n !küfür-engel aç/kapat`)
      return message.channel.send(küfürcu0k)

  }   
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, ' **Küfür Engel Aktif!**')
    let lus = await db.fetch(`kufurE_${message.guild.id}`)
    
    const reklamengelcim = new Discord.RichEmbed()
    .setTitle('Başarılı')
      .setColor("#6278c5")
    .setDescription(' **Küfür Engel Başarıyla Açıldı**')
    return message.channel.send(reklamengelcim)

  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`kufurE_${message.guild.id}`)

   const küfürengelcim22 = new Discord.RichEmbed()
    .setTitle('Başarılı')
    .setDescription(' **Küfür Engel Başarıyla Kapatıldı**')
    return message.channel.send(küfürengelcim22)
  }

  
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfür-engel'],
  permLevel: 3
}
exports.help = {
 name: 'küfürengel'
};
