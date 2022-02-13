import React, { useState } from "react";
import Board from "./Board";

import { calculateWinner } from "../../helpers/common";

import "../../styles/ticTacToe.css";

function TicTacToeGame() {
    const [gameState, setGameState] = useState({
        history: [
            {
                squares: Array(9).fill(null),
            },
        ],
        stepNumber: 0,
        xIsNext: true,
    });

    const savePosition = (position) => {
        const { history, stepNumber, xIsNext } = gameState;
        const historySnap = history.slice(0, stepNumber + 1);
        const current = historySnap[historySnap.length - 1];
        const squares = current.squares.slice();

        if (!squares[position] && !calculateWinner(squares)) {
            squares[position] = xIsNext ? "X" : "O";
            setGameState({
                history: historySnap.concat([{ squares }]),
                stepNumber: historySnap.length,
                xIsNext: !xIsNext,
            });
        }
    };

    const resetGame = () => {
        setGameState({
            history: [{ squares: Array(9).fill(null) }],
            stepNumber: 0,
            xIsNext: true,
        });
    };

    const jumpTo = (step) => {
        setGameState({
            history,
            stepNumber: step,
            xIsNext: step % 2 === 0,
        });
    };

    const { history, stepNumber, xIsNext } = gameState;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    let status;

    if (winner) {
        status = `The Winner is: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? "X" : "O"}`;
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    xIsNext={xIsNext}
                    savePosition={(i) => savePosition(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>
                    {history.map((step, move) => {
                        const goTo = move ? `Go to ${move}` : "Go to start";
                        const stepClass =
                            move === stepNumber ? "current" : "past";

                        return (
                            <li
                                className={`step ${stepClass}`}
                                key={move}
                                onClick={() => jumpTo(move)}
                            >
                                {goTo}
                            </li>
                        );
                    })}
                </ol>
            </div>
            <div>
                <button className="reset" onClick={resetGame}>
                    Reset Game History
                </button>
            </div>
        </div>
    );
}

export default TicTacToeGame;
