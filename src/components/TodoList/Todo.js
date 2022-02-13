import React from "react";

function Todo({ todo, status, completeTodo, editTodo, deleteTodo }) {
    return (
        <div>
            <li className={status} key={todo.id}>
                {todo.todo}
            </li>
            <button onClick={() => completeTodo(todo)}>Complete</button>
            <button onClick={() => editTodo(todo)}>Edit Todo</button>
            <button onClick={() => deleteTodo(todo)}>Delete Todo</button>
        </div>
    );
}

export default Todo;
