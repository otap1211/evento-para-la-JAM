const Discord = require('discord.js')
exports.run = async (client, message, args) => {
  
const ultraCalvo = new Discord.MessageEmbed()
 .addField('SU PORCENTAJE DE CALVA ES DE...', `> %100\n\nLiteralmente es el lider calvo`)
 .setColor("RANDOM")
  
let porcentaje = ["10%", "12%", "14%", "16%", "18%", "20%", "22%", "25%", "26%", "27%", "28%", "31%", "32%","35%", "50%", "51%", "54%", "53%", "64%", "69%", "72", "78%", "85%", "91", "97", "100"]
var calvo = porcentaje[Math.floor(Math.random() * porcentaje.length)]
let userm = message.mentions.users.first() || message.author;

  if(userm == "559502596847435827") {
  return message.channel.send(ultraCalvo)
} else {
 
const CalvEmbed = new Discord.MessageEmbed()
 .addField(`EL PORCENTAJE DE CALVA DE ES DE...`, `> ${calvo}\n\n ${userm} esta calvo XD`)
 .setColor("RANDOM")
 message.channel.send(CalvEmbed)
 message.react('🥚')


  
  }
} 
