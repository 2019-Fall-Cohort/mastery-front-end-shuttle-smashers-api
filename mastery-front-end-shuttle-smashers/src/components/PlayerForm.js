const Deact = require("../libs/deact");
const Button = require("./Button");
const Select = require("./Select");

function PlayerForm(id) {
    function handleSubmit(event) {
        event.preventDefault();

        const name = document.querySelector(".player-name").value;
        const country = document.querySelector(".player-country").value;
        const gender = document.querySelector(".gender-select").value;

        fetch(`http://localhost:8080/api/teams/${id}/add-player`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                country: country,
                gender: gender
            })
        })
            .then(response => {
                return response.json();
            })
            .then(player => {
                console.log(player);
            });
    }
    return Deact.create("form", { onsubmit: handleSubmit }, [
        Deact.create("h5", {}, "Add Player:"),
        Deact.create(
            "input",
            { class: "player-name", placeholder: "Player's Name", type: "text" },
            ""
        ),
        Deact.create(
            "input",
            { class: "player-country", placeholder: "Player's Country", type: "text"},
            ""
        ),
        Select(),

        Button({ type: "submit" }, "Submit")

    ]);
}

module.exports = PlayerForm;