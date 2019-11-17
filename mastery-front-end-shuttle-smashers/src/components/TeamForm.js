const Deact = require("../libs/deact");
const Button = require("./Button");

function TeamForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const name = document.querySelector(".team-name").value;
    const recordLabel = document.querySelector(".team-record-label").value;
    const homeTown = document.querySelector(".team-home-town").value;

    fetch(`http://localhost:8080/api/team`, {
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
      .then(team => {
        console.log(team);
      });
  }

  return Deact.create("form", { onsubmit: handleSubmit }, [
    Deact.create("h5", {}, "Add Team:"),
    Deact.create(
      "input",
      { class: "team-name", placeholder: "Name", type: "text" },
      ""
    ),
    Deact.create(
      "input",
      { class: "team-image-url", placeholder: "Image Url", type: "text" },
      ""
    ),
    Deact.create(
      "input",
      { class: "team-record-label", placeholder: "Record Label", type: "text" },
      ""
    ),
    Deact.create(
      "input",
      { class: "team-home-town", placeholder: "Home Town", type: "text" },
      ""
    ),
    Button({ type: "submit" }, "Submit")
  ]);
}

module.exports = TeamForm;