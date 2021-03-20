exports.run = (client, message, args) => {

    const name = message.member.displayName;
    message.delete();
    message.channel.send(`Ton pseudo est ${name}.`);

};

exports.help = {
    name: 'myname'
};