const Deact = require("../libs/deact");
const Button = require("./Button");

function ArtistForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const name = document.querySelector(".artist-name").value;
    const recordLabel = document.querySelector(".artist-record-label").value;
    const homeTown = document.querySelector(".artist-home-town").value;

    fetch(`http://localhost:8080/api/artists`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        recordLabel: recordLabel,
        homeTown: homeTown,
      })
    })
      .then(response => {
        return response.json();
      })
      .then(artist => {
        console.log(artist);
      });
  }

  return Deact.create("form", { onsubmit: handleSubmit }, [
    Deact.create("h5", {}, "Add Artist:"),
    Deact.create(
      "input",
      { class: "artist-name", placeholder: "Name", type: "text" },
      ""
    ),
    Deact.create(
      "input",
      { class: "artist-image-url", placeholder: "Image Url", type: "text" },
      ""
    ),
    Deact.create(
      "input",
      { class: "artist-record-label", placeholder: "Record Label", type: "text" },
      ""
    ),
    Deact.create(
      "input",
      { class: "artist-home-town", placeholder: "Home Town", type: "text" },
      ""
    ),
    Button({ type: "submit" }, "Submit")
  ]);
}

module.exports = ArtistForm;