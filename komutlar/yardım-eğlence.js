const Discord = require("discord.js")


exports.run = async(client,message,args) => {
  const clients = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail("https://cdn.discordapp.com/attachments/760470778264289340/760608640888602734/dsadsadasdas.png")
  .setTitle("Digna Eğlence Menüsü")
  .setDescription("[Digna BOT](https://https://slytherintr.glitch.me/) \n \n <a:ayarlar:760450768531750934> `fbi` | FBİ Evi basar \n \n <a:ayarlar:760450768531750934> `top-sektir` | Top Sektirirsiniz  \n \n <a:ldr:760451487443714078> `gol-at` | Kaleye Gol atar \n \n  <a:zpzp:760454758623871006> `koş` | Koşarsınız  \n \n <a:zpzp:760454758623871006> `oto-cevap` | Bot Ne Yazarsanız Cevap Verir  \n \n ** __Linkler__** \n  [Bota Oy Ver](https://top.gg/bot/yakında) **|** [Botu Sunucuna Ekle](https://yakında.com) **|** [Destek Suncusu](https://discord.gg/jgm9BAn) ")
  .setFooter('DignaBOT.com',client.user.avatarURL)
  .setTimestamp();
  

  message.channel.send(clients)
  
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'eğlence'],
permLevel: 0
}

exports.help = {
 name: 'eglence'
}
