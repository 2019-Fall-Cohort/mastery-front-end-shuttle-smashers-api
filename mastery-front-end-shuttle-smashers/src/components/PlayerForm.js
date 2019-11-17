const Deact = require("../libs/deact");
const Button = require("./Button");

function PlayerForm(id) {
    function handleSubmit(event) {
        event.preventDefault();

        const name = document.querySelector(".team-players").value;

        fetch(`http://localhost:8080/api/teams/${id}/add-player`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
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
            { class: "team-players", placeholder: "Player", type: "text" },
            ""
        ),
        Button({ type: "submit" }, "Submit")

    ]);
}

module.exports = PlayerForm;