const Discord = require("discord.js")

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pp'],
  permLevel: 0
}
exports.help = {
  name: 'avatar',
  yapımcıyunusexedir: 'Yunus.ExE Yapımcısı Ve Monster'
}

exports.run = async(client,  message, args) => {
  
    var user = message.mentions.users.first() || message.author;
  
  const Embed = new Discord.RichEmbed()
  .setTitle("Avatarın")
  .setDescription(`[:link: Resmi Tarayıcıdan Aç](https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif)`)
  .setImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.gif`)
  .setFooter(client.user.avatarURL ,'DignaBOT.com | Botumuz Sizin İsteklerinizle Güzelleşiyor!')
  message.channel.send(Embed)
}