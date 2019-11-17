const Deact = require("../libs/deact");
const Button = require("./button");
const Http = require("../utils/http");
const AlbumCard = require("./AlbumCard");
const AlbumPage = require("./AlbumPage");

function AlbumsButton(artist) {
    function renderAlbums() {
        document.querySelector(".content .container").innerHTML = "";
        Deact.render(
            AlbumPage(artist),
            document.querySelector(".content .container")
        );
        Http.getRequest(`http://localhost:8080/api/artists/${artist.id}`,
            function (artist) {
                artist.albums.forEach(function (album) {
                    Deact.render(
                        AlbumCard(album),
                        document.querySelector(".album-cards")
                    );
                });
            });
    }

    return Button(
        {
            class: "albums-button",
            onclick: renderAlbums
        },
        "Albums"
    );
}
module.exports = AlbumsButton;