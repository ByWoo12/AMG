const Discord = require("discord.js")


exports.run = async(client, message, args) => {
  const clients = new Discord.RichEmbed()
  .setTitle("Top Sektiriyorsun")
  .setImage("https://thumbs.gfycat.com/CloudyAlertFlycatcher-small.gif")
  .setThumbnail(message.guild.iconURL)
  .setFooter('DignaBOT.com',client.user.avatarURL)
  .setTimestamp()

  message.channel.send(clients)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sektir', 'top-sektir']
}

exports.help = {
  name: 'topsektir'
}