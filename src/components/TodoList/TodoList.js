import React, { useState } from "react";
import Todo from "./Todo";
import TodoEdit from "./TodoEdit";
import "../../styles/todoList.css";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [todoId, setTodoId] = useState(0);
    const [todoEdit, setTodoEdit] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const readValue = (e) => {
        setTodo(e.target.value);
    };

    const deleteTodo = (todo) => {
        const newSet = todos.filter((item) => item.id !== todo.id);
        setTodos(newSet);
    };

    const editTodo = (todo) => {
        setIsEditing(true);
        setTodoEdit(todo);
    };

    const saveValue = () => {
        setTodos([...todos, { id: todoId, todo, completed: false }]);
        setTodoId(todoId + 1);
        setTodo("");
    };

    const completeTodo = (todo) => {
        const todosCopy = [...todos];
        const edited = todosCopy.map((item) => {
            if (item.id === todo.id) {
                item.completed = !todo.completed;
            }
            return item;
        });
        setTodos(edited);
    };

    const saveEdit = () => {
        const todosCopy = [...todos];
        const edited = todosCopy.map((item) => {
            if (item.id === todoEdit.id) {
                item = todoEdit;
            }
            return item;
        });
        setTodos(edited);
        setIsEditing(false);
    };

    const cancelEdit = () => {
        setIsEditing(false);
    };

    const saveOnEnter = (e) => {
        if (e.key === "Enter") {
            saveValue();
        }
    };

    const readEditValue = (e) => {
        setTodoEdit({ ...todoEdit, todo: e.target.value });
    };

    const saveEditOnEnter = (e) => {
        if (e.key === "Enter") {
            saveEdit();
        }
    };

    return (
        <div>
            <h2>TODOs</h2>
            <input
                value={todo}
                onChange={readValue}
                onKeyPress={saveOnEnter}
                type="text"
                name="createTodo"
            />
            <button onClick={saveValue}>Save</button>
            <ul>
                {todos.map((item) => {
                    const status = item.completed ? "completed" : "pending";
                    return (
                        <Todo
                            key={item.id}
                            todo={item}
                            status={status}
                            completeTodo={completeTodo}
                            editTodo={editTodo}
                            deleteTodo={deleteTodo}
                        />
                    );
                })}
            </ul>
            {isEditing && (
                <TodoEdit
                    todoItem={todoEdit}
                    readEditValue={readEditValue}
                    saveEditOnEnter={saveEditOnEnter}
                    saveEdit={saveEdit}
                    cancelEdit={cancelEdit}
                />
            )}
        </div>
    );
}

export default TodoList;
