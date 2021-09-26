module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Výběr byl  **zrušen** !`);
    } else message.channel.send(`${client.emotes.error} - Musíš napsat platné číslo mezi **1** a **${tracks.length}** !`);
};


/**
 * @INFO
 * Bot Coded by _$Lukas$_#4198
 * https://github.com/LuxuryLukaas
 * @INFO
 * Please mention me , when using this Code!
 * @INFO
 */