import React from 'react'
import './App.css'
function Todo({todo,toggleComplete,deleteTask}) {
    const handleToggleComplete=()=>{
        toggleComplete(todo.id)
    }
    const deleteTaskHandler=()=>{
        deleteTask(todo.id)
    }
     return (
      <div className='singleTask'>
        <input type='checkbox' id='check' className='p-2'  onChange={handleToggleComplete} checked={todo.completed} />
       
        <p className={('m-0 p-1', todo.completed ? 'text-decoration-line-through' : "")} >{todo.task}</p>
       
        <span className='material-icons delete_btn' onClick={deleteTaskHandler}>delete</span>
        </div> 
        )
 
}

export default Todo
