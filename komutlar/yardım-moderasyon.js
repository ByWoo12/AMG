const Discord = require("discord.js")


exports.run = async(client,message,args) => {
  const clients = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/attachments/760470778264289340/760608640888602734/dsadsadasdas.png")
  .setTitle("Digna Moderasyon Menüsü")
  .setDescription("[Digna BOT](https://https://slytherintr.glitch.me/) \n \n <a:ayarlar:760450768531750934> `reklam-engel` | Bot Sunucunuzdaki Reklamları Engeller \n \n <a:ayarlar:760450768531750934> `küfür-engel` | Suncunuzda Bot Küfürleri Engeller  \n \n <a:ayarlar:760450768531750934> `slowmode` | Bot Suncunuza Yavaş Mode Ekler  \n \n <a:ayarlar:760450768531750934> `modlog` | Modlog Kanalını Ayarlarsınız  \n \n <a:ayarlar:760450768531750934> `chat-log` | Chat Log Kanalını Ayarlarsınız  \n \n  ** __Linkler__** \n  [Bota Oy Ver](https://top.gg/bot/yakında) **|** [Botu Sunucuna Ekle](https://yakında.com) **|** [Destek Suncusu](https://discord.gg/jgm9BAn) ")
  .setFooter('DignaBOT.com',client.user.avatarURL)
  .setTimestamp();
  

  message.channel.send(clients)
  
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'moderasyon'],
permLevel: 0
}

exports.help = {
 name: 'yetkili'
}
