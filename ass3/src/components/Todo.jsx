import React from 'react'
import TodoList from './TodoList.jsx';

const Todo = () => {

    const [value,setValue]=React.useState("");
    const [todos,setTodos]=React.useState([]);
  return (
      <>
      <div className='bar'>
      <input className="input" type="text" placeholder='Write Something' value={value} onChange={(e)=>
        {
            setValue(e.target.value);
        }}/>
         <button className='add' onClick={()=>
        {
           setTodos([...todos,{id:Date.now(),value:value}]);
           setValue("");
        }}>+</button>
      </div>
      <div className='list'>
      <TodoList todos={todos}/>
      </div>
        
        
      </>
     
    
    
  )
}

export default Todo