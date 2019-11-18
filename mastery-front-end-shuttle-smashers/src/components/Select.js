const Deact = require("../libs/deact");

function Select() {
    return Deact.create(
        "select",
        {
            class: "gender-select", name: "gender-field", id: "gender-select"
        },
        [
            Deact.create("option", {value: "nada"}, "Select Gender"),
            Deact.create("option", {value: "MALE"}, "Mens"),
            Deact.create("option", {value: "FEMALE"}, "Womens"),
            Deact.create("option", {value: "MIXED"}, "Coed")
        ]
    )
};

module.exports = Select;
