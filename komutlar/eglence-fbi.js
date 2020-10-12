const Discord = require("discord.js")


exports.run = async(client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Fbi Evinize Girdi!")
  .setImage("https://media.tenor.com/images/a1912e38f72c5df9050d931853fafddb/tenor.gif")
  .setThumbnail(message.guild.iconURL)
  .setFooter('DignaBOT.com',client.user.avatarURL)
  message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fbi-op'],
  permLevel: 0
}

exports.help = {
  name: 'fbi'
}