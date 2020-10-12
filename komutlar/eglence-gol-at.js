const Discord = require("discord.js")


exports.run = async(client, message, args) => {
  const clients = new Discord.RichEmbed()
  .setTitle(`${message.author.username}Adlı Kullanıcı Gol Attı`)
  .setImage("https://i.makeagif.com/media/3-06-2015/Pi62wZ.gif")
  .setThumbnail(message.guild.iconURL)
  .setFooter('DignaBOT.com',client.user.avatarURL)
  .setTimestamp()

  message.channel.send(clients)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gol-at', 'şutat', 'şut-at']
}

exports.help = {
  name: 'golat'
}

