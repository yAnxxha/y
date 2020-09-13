const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://cdn.glitch.com/6bc3fcf3-c3a5-4ade-9306-8d274a5a8708%2Ftenor-1.gif?v=1598391905854'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('')
        .setColor('#00BFFF')
        .setDescription(`${message.author} deu um tapa em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}