module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nejsi v roomce !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nejsi ve stejné roomce !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Hudba momentálně nehraje !`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} - Momentální song bude **přeskočen** !`);
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