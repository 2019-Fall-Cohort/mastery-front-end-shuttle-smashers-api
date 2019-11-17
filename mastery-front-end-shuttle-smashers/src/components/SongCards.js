const Deact = require("../libs/deact");

function SongCards() {
    return Deact.create("section", { class: `song-cards` }, "");
}

module.exports = SongCards;