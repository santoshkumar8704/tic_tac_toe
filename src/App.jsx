import { useState } from "react";
import GameBoard from "./GameBoard";
import Player from "./Player";
import Log from "./Log";

function App() {
  const [activeplayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  function handleActivePlayer(rowid, colid) {
    setGameTurns((prevTurns) => {
      const currentPlayer = activeplayer; // Use the currently active player

      // Toggle the player for the next turn
      const nextPlayer = currentPlayer === "X" ? "O" : "X";

      const updatedTurns = [
        ...prevTurns,
        { square: { row: rowid, col: colid }, player: currentPlayer },
      ];
      setActivePlayer(nextPlayer); // Set the next player as active
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
