module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Na tomto serveru není přehrávána žádná hudba !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Nejsi v žádné roomce !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Nejsem schopný se připojit do tvé roomky, zkontroluij moje práva!`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} toto není ve vaší zemi dostupné! Přeskakování...`);
            break;
        case 'MusicStarting':
            message.channel.send(`Hudba začíná... prosím počkej a zkus to znovu!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Discord Music Bot by _$Lukas$_#4198 V.1.0: ${error}`);
    };
};


/**
 * @INFO
 * Bot Coded by _$Lukas$_#4198
 * https://github.com/LuxuryLukaas
 * @INFO
 * Please mention me , when using this Code!
 * @INFO
 */