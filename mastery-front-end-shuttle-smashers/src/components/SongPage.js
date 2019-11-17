const Deact = require("../libs/deact");
const SongCards = require("./SongCards");
const SongForm = require("./SongForm");
const AlbumName = require("./AlbumName");

function SongPage(album) {
  return Deact.create("article", { class: "songs-page" }, [
    SongForm(album.id),
    AlbumName(album),
    Deact.create("h6", {}, "Songs:"),
    SongCards()
  ]);
}

module.exports = SongPage;