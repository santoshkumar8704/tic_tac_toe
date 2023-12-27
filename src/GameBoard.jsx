import { useState } from "react";

const InitialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard () {
    const[gameBoard ,setGameBoard] = useState(InitialGameBoard);
     function handleBoard(rowid,colid){
        setGameBoard((prevGameBoard) => {
             const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
             updatedGameBoard[rowid][colid] = 'X';
             return updatedGameBoard;
         })
     }
    return(
        <ol id="game-board">
            {gameBoard.map((row,rowid) =>
            <li key={rowid} >
                <ol>
                    {row.map((col,colid) => <li key={colid}>
                        <button onClick={() => handleBoard(rowid,colid)}>{col}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>

    )
}