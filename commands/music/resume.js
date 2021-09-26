module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nejsi v roomce !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nejsi ve stejné roomce !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Hudba momentálně nehraje !`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Hudba momentálně hraje !`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} spuštěno !`);
    },
};


/**
 * @INFO
 * Bot Coded by _$Lukas$_#4198
 * https://github.com/LuxuryLukaas
 * @INFO
 * Please mention me , when using this Code!
 * @INFO
 */