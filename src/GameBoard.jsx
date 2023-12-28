const InitialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = InitialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  //     const[gameBoard ,setGameBoard] = useState(InitialGameBoard);
  //      function handleBoard(rowid,colid){
  //         setGameBoard((prevGameBoard) => {
  //              const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //              updatedGameBoard[rowid][colid] = [selectedplayer];
  //              return updatedGameBoard;
  //          })
  //          onselectSquare();
  // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowid) => (
        <li key={rowid}>
          <ol>
            {row.map((player, colid) => (
              <li key={colid}>
                <button
                  onClick={() => onSelectSquare(rowid, colid)}
                  disabled={player !== null}
                >
                  {player}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
