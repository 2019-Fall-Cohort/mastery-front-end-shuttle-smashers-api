const Deact = require("../libs/deact");
const AlbumCards = require("./AlbumCards");
const AlbumForm = require("./AlbumForm");
const ArtistName = require("./ArtistName");

function AlbumPage(artist) {
  return Deact.create("article", { class: "albums-page" }, [
    AlbumForm(artist.id),
    ArtistName(artist),
    Deact.create("h6", {}, "Albums:"),
    AlbumCards()
  ]);
}

module.exports = AlbumPage;