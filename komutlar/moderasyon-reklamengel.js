const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {


  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`**Hey Sen** Evet Sen! Bu Komut İçin Yeterli Yetkin Yok!`)
if (!args[0])  {
    const küfürcu0k = new Discord.RichEmbed()
    .setTitle('Başarısız')
    .setDescription(` Bunumu Arıyorsun? \n !reklam-engel aç/kapat`)
      return message.channel.send(küfürcu0k)

  }   
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, ' **Reklam Engel Aktif!**')
    let lus = await db.fetch(`reklamengel_${message.guild.id}`)
    
    const reklamengelcim = new Discord.RichEmbed()
    .setTitle('Başarılı')
      .setColor("#6278c5")
    .setDescription(' **Reklam Engeli Açtım**')
    return message.channel.send(reklamengelcim)

  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`reklamengel_${message.guild.id}`)

   const küfürengelcim22 = new Discord.RichEmbed()
    .setTitle('Başarılı')
    .setDescription(' **Reklam Engeli Kapattım**')
    return message.channel.send(küfürengelcim22)
  }

  
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklam-engel']
}
exports.help = {
 name: 'reklamengel'
};