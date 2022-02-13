import React, { useState } from "react";
import Game from "../TicTacToe/Game";
import TodoArray from "../TodoArray/TodoArray";
import TodoList from "../TodoList/TodoList";
import Counters from "../Counters/Counters";

function Main() {
    const [showOption, setShowOption] = useState(1);

    return (
        <div>
            <h2>List of Mini-apps</h2>
            <div>
                <button onClick={() => setShowOption(1)}>Tic Tac Toe</button>
                <button onClick={() => setShowOption(2)}>To Do List</button>
                <button onClick={() => setShowOption(3)}>To Do Array</button>
                <button onClick={() => setShowOption(4)}>Counters</button>
            </div>
            {showOption === 1 && <Game />}
            {showOption === 2 && <TodoList />}
            {showOption === 3 && <TodoArray />}
            {showOption === 4 && <Counters />}
        </div>
    );
}

export default Main;
