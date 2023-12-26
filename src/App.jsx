import GameBoard from "./GameBoard"
import Player from "./Player"

function App() {
  

  return (
    <div id="game-container">
    <ol id="players">
      
      <Player name="player1" symbol ="X" />
      <Player name="player2" symbol ="O" />
    </ol>
    <GameBoard/>

    </div>
  )
}

export default App
