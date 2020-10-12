const Discord = require("discord.js")


exports.run = async(client,message,args) => {
  const clients = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/attachments/760470778264289340/760608640888602734/dsadsadasdas.png")
  .setTitle("Digna  Yardım Menüsü")
  .setDescription("[Digna Bot](https://https://slytherintr.glitch.me/) \n \n <a:ayarlar:760450768531750934> `eğlence` | Eğlence Komutlarını Gösterir  \n \n <a:ldr:760451487443714078> `koruma` | Koruma komutlarını gösterir. \n \n <a:zpzp:760454758623871006> `moderasyon` | Moderasyon komutlarını gösterir. \n \n <a:ldr:760451487443714078> `gif` | Gif Komutlarını Gösterir. \n \n ** __Linkler__** \n  [Bota Oy Ver](https://top.gg/bot/yakında) **|** [Botu Sunucuna Ekle](https://yakında.com) **|** [Destek Suncusu](https://discord.gg/jgm9BAn) ")
  .setFooter('DignaBOT.com',client.user.avatarURL)
  .setTimestamp();

  message.channel.send(clients)
  
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'help'],
permLevel: 0
}

exports.help = {
 name: 'yardım'
}
