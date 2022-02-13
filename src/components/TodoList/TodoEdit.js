import React from "react";

function TodoEdit({
    todoItem,
    readEditValue,
    saveEditOnEnter,
    saveEdit,
    cancelEdit,
}) {
    return (
        <div>
            <h3>Edit Todo</h3>
            <div>
                <input
                    value={todoItem.todo}
                    onChange={readEditValue}
                    onKeyPress={saveEditOnEnter}
                    type="text"
                    name="editTodo"
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
            </div>
        </div>
    );
}

export default TodoEdit;
