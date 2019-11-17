const Deact = require("../libs/deact");
const Button = require("./button");
const Http = require("../utils/http");
const PlayerCard = require("./PlayerCard");
const PlayerPage = require("./PlayerPage");

function PlayerButton(team) {
    function renderPlayers() {
        document.querySelector(".content .container").innerHTML = "";
        Deact.render(
            PlayerPage(team),
            document.querySelector(".content .container")
        );
        Http.getRequest(`http://localhost:8080/api/teams/${team.id}`,
            function (team) {
                team.player.forEach(function (player) {
                    Deact.render(
                        PlayerCard(player),
                        document.querySelector(".player-cards")
                    );
                });
            });
    }

    return Button(
        {
            class: "player-button",
            onclick: renderPlayers
        },
        "Players"
    );
}
module.exports = PlayerButton;