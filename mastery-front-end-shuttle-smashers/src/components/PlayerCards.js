const Deact = require("../libs/deact");

function AlbumCards() {
    return Deact.create("section", { class: `album-cards` }, "");
}

module.exports = AlbumCards;