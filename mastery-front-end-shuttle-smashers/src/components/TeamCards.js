const Deact = require("../libs/deact");

function TeamCards() {
  return Deact.create("section", { class: `team-cards` }, "");
}

module.exports = TeamCards;