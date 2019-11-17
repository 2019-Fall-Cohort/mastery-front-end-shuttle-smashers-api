const Deact = require("../libs/deact");

function PlayerName(player) {
    return Deact.create("section", { class: 'player-name-display' }, player.name);
}

module.exports = PlayerName;