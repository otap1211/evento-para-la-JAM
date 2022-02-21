const db = require("megadb");
const { existsSync } = require("fs");
const Discord = require("discord.js");

const client = new Discord.Client(
 { ws: { properties: { $browser: "Discord Android" } } }
);

require('http')
.createServer((req, res) => res.end(`Beep Beep... ¡preparado hasta el asado!`))
.listen(3000);

const disbut = require('discord-buttons');
disbut(client);

client.once('ready', async () => {
  console.log(`Conectado ${client.user.tag}`);
  console.log(`Servidores: ${client.guilds.cache.size}`)
let posicion = 0;
async function establecerPresencia() {
  const presencias = [
  'cantar canciones',
  'ver pokemon 1era generacion',
  'ver eitan calbo :v',
  'pacman',
]

    if (posicion > presencias.length - 1) posicion = 0;

    const estado = presencias[posicion];

    await client.user.setActivity(estado);
    posicion++;
  }

  setInterval(async () => {
    await establecerPresencia()
  }, 10000)

await establecerPresencia()
});


client.on('message', async (message) => {
if (message.author.bot) return;
if (!message.guild) return;
const prefixs = new db.crearDB("prefixs");

const prefix = prefixs.tiene(message.guild.id) ? await prefixs.obtener(message.guild.id) : "!";

if (!message.content.startsWith(prefix)) return;
if (prefix.length == message.content.length) return message.channel.send(`¡Encontraste mi prefix! usa \`${prefix}pacman\``)

const args = message.content
  .slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
try {
  const rutaComando = `./cmd/${command}.js`
if (!existsSync(rutaComando)) return message.channel.send("No encontre este comando")
const comando = require(rutaComando)
if (!comando) return message.channel.send("Comando invalido")
  await comando.run(client, message, args);
} catch (e) {
const em = new Discord.MessageEmbed()
.setDescription(e).setColor("RED")
message.channel.send(em)
console.log(e)
  }
});


client.login(process.env.TOKEN).catch(err =>{
 console.log("[Error]:El token no es válido.");
});