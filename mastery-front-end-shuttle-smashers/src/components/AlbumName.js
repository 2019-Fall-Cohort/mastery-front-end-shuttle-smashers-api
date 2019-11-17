const Deact = require("../libs/deact");

function AlbumName(album) {
    return Deact.create("section", { class: 'album-name-display' }, album.title);
}

module.exports = AlbumName;