const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(" Yetersiz **yetki!**")
  
  if (!args[0]){
    message.channel.send('Kufur-engel kapat/aç Yazmalısın')
  }
  if (args[0] === 'aç'){
    message.channel.send("Kufur Engel Aktıf \<a:tick:782886374982418442> ")
    
    db.set(`kufur_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send('Kufur Engel Başarıyla Kapatıldı \<a:hayir:782879758760280074> ')
    
    db.set(`kufur_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "küfür-engel",
  description: "Küfür engel açar yada kapatır.",
  usage: "küfür"
}