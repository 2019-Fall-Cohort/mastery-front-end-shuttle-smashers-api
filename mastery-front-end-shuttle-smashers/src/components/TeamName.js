const Deact = require("../libs/deact");

function TeamName(team) {
    return Deact.create("section", {class: 'team-name-display'}, team.name);
}

module.exports = TeamName;