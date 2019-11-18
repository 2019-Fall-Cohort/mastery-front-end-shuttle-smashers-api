const Deact = require("../libs/deact");
const Button = require("./button");
const Http = require("../utils/http");
const TeamCard = require("./TeamCard");
const TeamPage = require("./TeamPage");

function TeamsButton() {
    function renderTeams() {
        document.querySelector(".content .container").innerHTML = "";
        Deact.render(
            TeamPage(),
            document.querySelector(".content .container")
        );
        Http.getRequest("http://localhost:8080/api/teams", function (teams) {
            teams.forEach(function (team) {
                Deact.render(
                    TeamCard(team),
                    document.querySelector(".team-cards")
                );
            });
        });
    }

    return Button(
        {
            class: "teams-button",
            onclick: renderTeams
        },
        "Teams"
    );
}
module.exports = TeamsButton;