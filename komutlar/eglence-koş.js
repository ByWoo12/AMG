const Discord = require("discord.js")


exports.run = async(client, message, args) => {
  const clients = new Discord.RichEmbed()
  .setTitle("Koş Lan Koş Zayıflarsın!")
  .setImage("https://listelist.com/wp-content/uploads/2014/08/kos-listelist-19.gif")
  .setThumbnail(message.guild.iconURL)
  .setFooter('DignaBOT.com',client.user.avatarURL)
  .setTimestamp()

  message.channel.send(clients)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k-o-ş', 'koşlan']
}

exports.help = {
  name: 'koş'
}