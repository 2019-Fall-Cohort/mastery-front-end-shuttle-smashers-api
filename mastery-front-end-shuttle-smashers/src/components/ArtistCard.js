const Deact = require("../libs/deact");
const AlbumButton = require("./AlbumButton");

function ArtistCard(artist) {
    return Deact.create("section", { class: `artist-card` }, [
        Deact.create("h3", { class: `artist-card__name` }, artist.name),
        Deact.create("img", { class: `artist-card__imageUrl`, src: `${artist.imageUrl}`, alt: `${artist.name}` }, ""),
        Deact.create("h5", { class: `artist-card__record-label` }, artist.recordLabel),
        Deact.create("h6", { class: `artist-card__hometown` }, artist.homeTown),
        AlbumButton(artist)
    ]);
}

module.exports = ArtistCard;



