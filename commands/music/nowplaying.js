module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nejsi v roomce !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nejsi ve stejné roomce !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Hudba momentálně nehraje !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'This bot created by _$Lukas$_#4198 (_$Lukas$_#4198 Music-bot)' },
                fields: [
                    { name: 'Channel', value: track.author, inline: true },
                    { name: 'Pustil', value: track.requestedBy.username, inline: true },
                    { name: 'Z playlistu', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: 'Views', value: track.views, inline: true },
                    { name: 'Délka', value: track.duration, inline: true },
                    { name: 'Filtr aktivován', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Hlasitost', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Opakovaci mod', value: client.player.getQueue(message).repeatMode ? 'Ano' : 'Ne', inline: true },
                    { name: 'Momentálně pozastaveno', value: client.player.getQueue(message).paused ? 'Ano' : 'Ne', inline: true },

                    { name: 'Progress bar', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
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