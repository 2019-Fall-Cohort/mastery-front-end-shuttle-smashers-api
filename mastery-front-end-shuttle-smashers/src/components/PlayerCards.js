const Deact = require("../libs/deact");

function PlayerCards() {
    return Deact.create("section", { class: `player-cards` }, "");
}

module.exports = PlayerCards;