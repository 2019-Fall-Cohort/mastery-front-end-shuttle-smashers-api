const Deact = require("../libs/deact");
const PlayerCards = require("./PlayerCards");
const PlayerForm = require("./PlayerForm");
const TeamName = require("./TeamName");

function PlayerPage(team) {
  return Deact.create("article", { class: "players-page" }, [
    PlayerForm(team.id),
    TeamName(team),
    Deact.create("h6", {}, "Players:"),
    PlayerCards()
  ]);
}

module.exports = PlayerPage;