const Discord = require('discord.js');
const client = new Discord.Client();


module.exports.run = (client, message, args) => {
  if (!message.guild.member(message.author).roles.find(r => r.name === "everyone")) { return message.channel.send('Vous n\'avez pas la permission !'); }
      let text = message.content.slice('sn!everyone'.length);
      message.guild.members.forEach(member => {
        if (member.id != client.user.id && !member.user.bot) member.send(text);   
      });
      message.channel.send("Un message -> everyone a été envoyé")
      message.delete(1000);
    }
;

  module.exports.help = {
    name: 'everyone'
};
