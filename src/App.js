import React, { useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import "./App.css";

function App() {

  const [todos, setTodos] = useState([
    {
      text: "Meet Masrafee Bin Mortaza",
      isCompleted: true
    },
    {
      text: "Meet Sakib Al Hasan",
      isCompleted: false
    },
    {
      text: "Meet Donald Trump",
      isCompleted: true
    }         
  ])


  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-block">
        <div className="todo-list">
          {todos.map((todo, index) => 
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          )}
        </div>
        <AddTodo addTodo={addTodo} />
      </div>
    </div>
  )
}


export default App;