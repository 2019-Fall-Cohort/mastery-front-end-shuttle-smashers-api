const Deact = require("../libs/deact");
const Button = require("./Button");

function AlbumForm(id) {
    function handleSubmit(event) {
        event.preventDefault();

        const title = document.querySelector(".artist-albums").value;

        fetch(`http://localhost:8080/api/artists/${id}/add-album`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
            })
        })
            .then(response => {
                return response.json();
            })
            .then(album => {
                console.log(album);
            });
    }
    return Deact.create("form", { onsubmit: handleSubmit }, [
        Deact.create("h5", {}, "Add Album:"),
        Deact.create(
            "input",
            { class: "artist-albums", placeholder: "Album", type: "text" },
            ""
        ),
        Button({ type: "submit" }, "Submit")

    ]);
}

module.exports = AlbumForm;