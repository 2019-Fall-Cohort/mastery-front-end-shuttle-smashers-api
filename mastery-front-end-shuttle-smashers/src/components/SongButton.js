const Deact = require("../libs/deact");
const Button = require("./button");
const Http = require("../utils/http");
const SongCard = require("./SongCard");
const SongPage = require("./SongPage");

function SongButton(album) {
    function renderSongs() {
        document.querySelector(".content .container").innerHTML = "";
        Deact.render(
            SongPage(album),
            document.querySelector(".content .container")
        );
        Http.getRequest(`http://localhost:8080/api/albums/${album.id}`, function (album) {
            album.songs.forEach(function (song) {
                Deact.render(
                    SongCard(song),
                    document.querySelector(".song-cards")
                );
            });
        });
    }

    return Button(
        {
            class: "song-button",
            onclick: renderSongs
        },
        "Songs"
    );
}
module.exports = SongButton;