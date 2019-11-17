const Deact = require("../libs/deact");

function PlayerCard(player) {
    return Deact.create("section", { class: `player-card` }, [
        Deact.create("h5", { class: `player-card__name` }, player.name),
    ]);
}

module.exports = PlayerCard;