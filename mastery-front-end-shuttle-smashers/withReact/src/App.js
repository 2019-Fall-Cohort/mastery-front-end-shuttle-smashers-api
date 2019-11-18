import React from 'react';
import './App.css';

import Title from './title/title.component';

function App() {

  function ShowTeams()  {
    console.log("show teams clicked")
  }

  function ShowPlayers() {
    console.log("show players clicked")
  }

  return (
    <div className="App">
      <Title text="Shuttle Smashers!"/>
      <button className="teams-button" onClick={ShowTeams}>TEAMS</button>
      <button className="players-button" onClick={ShowPlayers}>Players</button>
    </div>
  );
}

export default App;
