import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./Player";
import Log from "./Log";
function deriveActivePlayer (prevTurns){
  let currentPlayer = "X";
  if(prevTurns.length >0 && prevTurns[0].player === "X"){
    currentPlayer = "O";
  }
  return currentPlayer;

}

function App() {
  
  const [gameTurns, setGameTurns] = useState([]);
  const activeplayer = deriveActivePlayer(gameTurns);
  function handleActivePlayer(rowid, colid) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns); // Use the currently active player

      // Toggle the player for the next turn
  

      const updatedTurns = [
        
        { square: { row: rowid, col: colid }, player: currentPlayer },...prevTurns,
      ];
     // Set the next player as active
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="player1" symbol="X" isActive={activeplayer === "X"} />
          <Player name="player2" symbol="O" isActive={activeplayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleActivePlayer} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
