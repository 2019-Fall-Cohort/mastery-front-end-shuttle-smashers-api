const Deact = require("../libs/deact");
const TeamCards = require("./TeamCards");
const TeamForm = require("./TeamForm");

function TeamPage() {
  return Deact.create("article", { class: "team-page" }, [
    TeamForm(),
    TeamCards()
  ]);
}

module.exports = TeamPage;