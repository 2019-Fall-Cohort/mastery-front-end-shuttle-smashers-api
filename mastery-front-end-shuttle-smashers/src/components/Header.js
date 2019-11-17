const Deact = require("../libs/deact");
const Title = require("./Title");
const TeamButton = require("./TeamButton");
const Nav = require("./Nav");

async function Header() {
    return Deact.create(
        "header",
        {
            style: `background-color: pink; display: flex; justify-content: space-between; padding: 1rem;`
        },
        [
            Title("black-text-color", "Shuttle Smashers!"),
            Nav({}, [TeamButton()])
        ]
    );
}

module.exports = Header;