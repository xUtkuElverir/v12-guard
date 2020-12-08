const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`ROEY   Guard Bot`)
.setDescription(`


:white_small_square: **=**  \`ug!kanal-koruma\` : **Kanal Koruma Aç/Kapat \<a:yuklen:782271167909462037> **
:white_small_square: **=**  \`ug!küfür-engel\`:  **Küfür Engel Aç/Kapat \<a:yldz:782269240953798667> **
:white_small_square: **=**  \`ug!reklam-engel\` :  **Reklam Engel Aç/Kapat \<a:ucgen:782269264223535144> **
:white_small_square: **=**  \`ug!sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız \<a:sonsuzkobs:782285078473867286> **
:white_small_square: **=**  \`ug!ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız \<a:RainbowElmasGif:782886248330166282> **
:white_small_square: **=**  \`ug!unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız \<a:purplediamond:782269200437739551> **
:white_small_square: **=**  \`ug!istatistik\`:  **Botun İstatistiklerini Atar \<a:durum:783017957580079206> **
:white_small_square: **=**  \`ug!temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler  \<a:true:782269910621225010>    **
:white_small_square: **=**  \`ug!ping\`:  **Pinginizi Ölçüp Atar \<:smsek:782270637678526474> **
:white_small_square: **=**  \`ug!avatar\`:  **Avatarınızı Atar \<a:hype:782899224413077525> **

`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};