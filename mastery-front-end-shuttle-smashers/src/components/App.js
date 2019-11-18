const Deact = require("../libs/deact");
const Header = require("./Header");
const Content = require("./Content");

async function App() {
  return Deact.create("section", { class: `app-container` }, [
    await Header(),
    Content()
  ]);
}

module.exports = App;