const Deact = require("../libs/deact");
const Button = require("./Button");
const Select = require("./Select");

function TeamForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const name = document.querySelector(".team-name").value;
    const flagUrl = document.querySelector(".flag-url").value;
    const gender = document.querySelector(".team-gender").value;

    fetch(`http://localhost:8080/api/teams/add-team`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        flagUrl: flagUrl,
        gender: gender
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
      { class: "flag-url", placeholder: "flag Url", type: "text" },
      ""
    ),
    Select(),
    // Deact.create(
    //   "input",
    //   { class: "team-gender", placeholder: "Gender", type: "text" },
    //   ""
    // ),
    Button({ type: "submit" }, "Submit")
  ]);
}

module.exports = TeamForm;