const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `🗓️ ${days.toFixed()} dias\n🗓️ ${hours.toFixed()} horas\n🗓️ ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`Tempo de atividade 🕰️`)
    .setThumbnail("https://cdn.glitch.com/6bc3fcf3-c3a5-4ade-9306-8d274a5a8708%2F8a778c0bf7473862e8445b7b4e6ebe49.gif?v=1599961711598")
    .setColor("#7B68EE")
    .setDescription(`**Estou online há:**\n${uptime}`)

  message.channel.send(embed);
};