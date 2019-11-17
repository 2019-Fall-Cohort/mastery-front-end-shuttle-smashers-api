const Deact = require("../libs/deact");
const Title = require("./Title");
const TeamsButton = require("./TeamsButton");
const Nav = require("./Nav");

async function Header() {
    return Deact.create(
        "header",
        {
            style: `background-color: green; display: flex; justify-content: space-between; padding: 1rem;`
        },
        [
            Title("black-text-color", "Shuttle Smashers!"),
            Nav({}, [TeamsButton()])
        ]
    );
}

module.exports = Header;