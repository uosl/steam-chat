module.exports = {
    steamID: "",
    steamNick: "",
    steamError: "",
    reconnectTries: 0,
    connected: false,
    state: 1, // EPersonaState.Online
    lastInvite: "",
    lastChat: "",
    ghostTimer: null,
    users: {},   // steamID: { persona_state, player_name, game_name }
    clans: {},   // chatID:  { clan_name, user_count, user_live, members: { steamID: rank } }
    friends: [], // [ steamID, ... ]
    chats: [], // [ "log" | steamID | chatID, ... ]
    currentChat: "log"
}; // TODO: move steam-specific keys to steam and ui-specific to UI
