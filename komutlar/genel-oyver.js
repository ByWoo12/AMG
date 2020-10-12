const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  const clients = new Discord.RichEmbed()
  .setColor("BLUE")
  .setThumbnail("https://cdn.discordapp.com/attachments/760470778264289340/760608640888602734/dsadsadasdas.png")
  .setTitle( '» Digna', client.user.avatarURL)
  .setDescription("[Digna BOT](https://sitemiz.com) \n \n Botun gelişmesinde bize en değerli desteği verebilirsin ve destek sunucusunda özel rol kazanabilirsin :) \n \n **__Buradan Oy Verebilirsin__** \n [Tıkla](https://top.gg)")
  .setFooter('DignaBOT.com',client.user.avatarURL)
  message.channel.send(clients)
}

exports.conf = {bled: true,
  guildOnly: false,
  aliases: ['oyver'],
  permLevel: 0
  }

exports.help = {
  name: 'oy-ver',
  yapımcı: 'Yunus.ExE',
  herneyseyse: 'tmmı'
}