const Deact = require("../libs/deact");

function ArtistName(artist) {
    return Deact.create("section", {class: 'artist-name-display'}, artist.name);
}

module.exports = ArtistName;