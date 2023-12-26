const InitialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard () {
    return(
        <ol id="game-board">
            {InitialGameBoard.map((row,rowid) =>
            <li key={rowid} >
                <ol>
                    {row.map((col,colid) => <li key={colid}>
                        <button>{col}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>

    )
}