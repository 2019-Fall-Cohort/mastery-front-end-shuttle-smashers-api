const Deact = require("../libs/deact");
const PlayerButton = require("./PlayerButton");

function TeamCard(team) {
    return Deact.create("section", { class: `team-card` }, [
        Deact.create("h3", { class: `team-card__name` }, team.name),
        Deact.create("img", { class: `team-card__flagUrl`, src: `${team.flag-url}`, alt: `${team.name}` }, ""),
        Deact.create("h5", { class: `team-card__gender` }, team.gender),
        PlayerButton(team)
    ]);
}

module.exports = TeamCard;



