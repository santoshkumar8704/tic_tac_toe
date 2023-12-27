import { useState } from "react";
import GameBoard from "./GameBoard"
import Player from "./Player"

function App() {
  const[activeplayer,setActivePlayer] = useState("x");
  function handleActivePlayer (){
    setActivePlayer((currentActivePlayer) => currentActivePlayer === "x" ? "O" : "x")
  }
  

  return (
    <div id="game-container">
    <ol id="players" className="highlight-player">
      
      <Player name="player1" symbol ="X" isActive = {activeplayer === "x"} />
      <Player name="player2" symbol ="O" isActive = {activeplayer === "O"} />
    </ol>
    <GameBoard onselectSquare={handleActivePlayer} selectedplayer = {activeplayer}/>

    </div>
  )
}

export default App
