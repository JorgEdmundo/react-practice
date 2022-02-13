import React, { useState } from "react";

import "../../styles/todoList.css";

function TodoArray() {
    const [task, setTask] = useState("");
    const [editTask, setEditTask] = useState({});
    const [ToDos, setToDos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    const saveToDo = () => {
        setToDos([...ToDos, { task, completed: false }]);
        setTask("");
    };

    const completeTask = (index) => {
        const copyToDos = [...ToDos];
        copyToDos[index].completed = !copyToDos[index].completed;
        setToDos(copyToDos);
    };

    const deleteTask = (index) => {
        const copyToDos = [...ToDos];
        copyToDos.splice(index, 1);
        setToDos(copyToDos);
    };

    const onEditTask = (index) => {
        setIsEditing(true);
        setEditTask({ task: ToDos[index].task, taskIndex: index });
    };

    const cancelEdit = (index) => {
        setIsEditing(false);
    };

    const saveEdit = () => {
        const copyToDos = [...ToDos];
        const copyEditTask = { ...editTask };
        const { task, taskIndex } = copyEditTask;

        copyToDos[taskIndex] = {
            task: task,
            completed: copyToDos.completed,
        };
        setToDos(copyToDos);
        setIsEditing(false);
    };

    return (
        <>
            <h1>TODO Array</h1>
            <div>
                <h2>Add Todo</h2>
                <input
                    name="task"
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={saveToDo}>Save</button>
            </div>
            <div>
                <ul>
                    {ToDos.map((ToDo, index) => {
                        const { task, completed } = ToDo;
                        const completedStyle = completed ? "completed" : "";

                        return (
                            <>
                                <li key={index} className={completedStyle}>
                                    {task}
                                </li>
                                <button onClick={() => completeTask(index)}>
                                    Complete
                                </button>
                                <button onClick={() => onEditTask(index)}>
                                    Edit
                                </button>
                                <button onClick={() => deleteTask(index)}>
                                    Delete
                                </button>
                            </>
                        );
                    })}
                </ul>
                {isEditing && (
                    <div>
                        <input
                            value={editTask.task}
                            onChange={(e) =>
                                setEditTask({
                                    ...editTask,
                                    task: e.target.value,
                                })
                            }
                        />
                        <button onClick={cancelEdit}>Cancel</button>
                        <button onClick={saveEdit}>Save Edit</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default TodoArray;
