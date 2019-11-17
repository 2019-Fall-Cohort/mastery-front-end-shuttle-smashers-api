const Deact = require("../libs/deact");

function ArtistCards() {
  return Deact.create("section", { class: `artist-cards` }, "");
}

module.exports = ArtistCards;