import React from 'react';
import '../css/Todos.css';
export const Todos = ({todos}) => {
  let displayTodos = todos.map(todo => {
    return (  <li key={todo.id} className={todo.completed ? "completed" : ""}>
        TITLE: {todo.title}
        <br />
        COMPLETED? {todo.completed.toString()}
      </li>
    )
  })
  return(
    <div className="todos">
      <h1>TODO PAGE</h1>
      <ul>
        {displayTodos}
      </ul>
    </div>
  )
}
