import React from 'react';

function Todo({todo, index, completeTodo, removeTodo}) {
    return (
        <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">
            {todo.text}
            <div>
                <button className="complete-todo" onClick={() => completeTodo(index)}>{ todo.isCompleted ? 'Completed' : 'Complete'}</button>
                <button className="delete-todo" onClick={() => removeTodo(index)}>x</button> 
            </div>
        </div>
    )
}

export default Todo;