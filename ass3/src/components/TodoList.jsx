import React from 'react'
import TodoItem from './TodoItem.jsx'

const TodoList = ({todos}) => {
  return (
    <div>
        <h3>Todo List</h3>
        <ul>
           {
               todos.map((todo)=>
               (
                  <TodoItem key={todo.id} value={todo.value}/>
               ))
           }
        </ul>
    </div>
  )
}

export default TodoList