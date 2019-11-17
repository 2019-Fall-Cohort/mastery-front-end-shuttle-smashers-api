const Deact = require("../libs/deact");
const SongButton = require("./SongButton");

function AlbumCard(album) {
    return Deact.create("section", { class: `album-card` }, [
        Deact.create("h5", { class: `album-card__title` }, album.title),
        SongButton(album)
    ]);
}

module.exports = AlbumCard;