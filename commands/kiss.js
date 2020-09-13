const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://cdn.discordapp.com/attachments/750453236841971767/750514470756941954/tenor-7_1.gif',
  'https://media.tenor.com/images/b020758888323338c874c549cbca5681/tenor.gif',
  'https://media.tenor.com/images/26aaa1494b424854824019523c7ba631/tenor.gif',
  'https://media.tenor.com/images/a23d2ec86610bd1dd026a07853992b57/tenor.gif',
  'https://media.tenor.com/images/822b11c4ab7843229fdd4abf5ccadf61/tenor.gif',
  'https://media.tenor.com/images/c9fba5642c0d4984d8c44c8cc62826cd/tenor.gif',
  'https://media.tenor.com/images/dac6a7272f17e7bd38341917b2064e9d/tenor.gif',
  'https://media.giphy.com/media/JFmIDQodMScJW/giphy.gif'
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
        .setColor('#8B0000')
        .setDescription(`${message.author} beijou ${user} eu shippo UwU`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Shippo :3')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}