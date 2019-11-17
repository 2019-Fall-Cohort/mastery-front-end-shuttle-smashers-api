const Deact = require("../libs/deact");
const Button = require("./button");
const Http = require("../utils/http");
const ArtistCard = require("./ArtistCard");
const ArtistPage = require("./ArtistPage");

function ArtistsButton() {
    function renderArtists() {
        document.querySelector(".content .container").innerHTML = "";
        Deact.render(
            ArtistPage(),
            document.querySelector(".content .container")
        );
        Http.getRequest("http://localhost:8080/api/artists", function (artists) {
            artists.forEach(function (artist) {
                Deact.render(
                    ArtistCard(artist),
                    document.querySelector(".artist-cards")
                );
            });
        });
    }

    return Button(
        {
            class: "artists-button",
            onclick: renderArtists
        },
        "Artists"
    );
}
module.exports = ArtistsButton;