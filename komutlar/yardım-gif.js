const Discord = require("discord.js")


exports.run = async(client,message,args) => {
  const clients = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/attachments/760470778264289340/760608640888602734/dsadsadasdas.png")
  .setTitle("Digna Gif Menüsü")
  .setDescription("[Digna BOT](https://https://slytherintr.glitch.me/) \n \n <a:ayarlar:760450768531750934> `woman` | Kadın Gifi atar \n \n <a:ayarlar:760450768531750934> `man` | Erkek Gifi Atar  \n \n <a:ayarlar:760450768531750934> `anime` | Animasyon Gifi Atar  \n \n  ** __Linkler__** \n  [Bota Oy Ver](https://top.gg/bot/yakında) **|** [Botu Sunucuna Ekle](https://yakında.com) **|** [Destek Suncusu](https://discord.gg/jgm9BAn) ")
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
 name: 'gif'
}
