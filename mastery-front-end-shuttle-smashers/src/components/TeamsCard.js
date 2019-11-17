const Deact = require("../libs/deact");
const PlayerButton = require("./PlayerButton");

function TeamCard(team) {
    return Deact.create("section", { class: `team-card` }, [
        Deact.create("h3", { class: `team-card__name` }, team.name),
        Deact.create("img", { class: `team-card__imageUrl`, src: `${artist.imageUrl}`, alt: `${artist.name}` }, ""),
        Deact.create("h5", { class: `team-card__record-label` }, team.recordLabel),
        Deact.create("h6", { class: `team-card__hometown` }, team.homeTown),
        PlayerButton(team)
    ]);
}

module.exports = TeamCard;



