const Deact = require("../libs/deact");
const ArtistCards = require("./ArtistCards");
const ArtistForm = require("./ArtistForm");

function ArtistPage() {
  return Deact.create("article", { class: "artists-page" }, [
    ArtistForm(),
    ArtistCards()
  ]);
}

module.exports = ArtistPage;