import React, { useState, useRef } from "react";
import "./App.css";
import "./index.css";

import Todolist from "./Todolist";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [todos, setTodos] = useState([]);
  const refTask = useRef();
  // const LOCAL_STORAGE_KEY = "todoapp.todolist";
  //  <-----retriveing data from localStorage------>

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   console.log(">>>>>>>",storedTodos)
  //   if (storedTodos) setTodos(storedTodos);
  // }, []);

  // //     <------saving to local storage-------->

  // useEffect(() => {
  //   if(todos){

  //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  //   }
  // }, [todos]);

  //    <------------ adding new task ----------->

  const addToList = () => {

    if (!refTask.current.value) return;
    if (refTask.current.value.match(/^\s*$/)) return;

    const newTodo = {
      id: uuidv4(),
      task: refTask.current.value,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    refTask.current.value = null;
  };

  const toggleComplete = (id) => {
    const newtodo = [...todos];
    const todo = newtodo.find((item) => item.id === id);
    todo.completed = !todo.completed;
    setTodos(newtodo);
  };

  //   <------- clearing completed tasks ------>

  const clearCompleted = () => {
    const newtodo = todos.filter((item) => !item.completed);
    setTodos(newtodo);
  };

  // <------- delete tasks ----->

  const deleteTask = (id) => {
    const newtodo = todos.filter((item) => item.id !== id);
    setTodos(newtodo);
  };

  return (

    <div className="App my-5 px-2">
      <h1 className="text-center text-white">
        To Do List <span className="material-icons my-5">fact_check</span>
      </h1>
      <div className="row">
        <input className="col-10 p-2 me-1 ms-auto rounded" type="text" ref={refTask} />
        <button className="btn p-0 me-auto btn-success col-1" onClick={addToList}> <span className="material-icons p-md-2">add</span> </button>
      </div>
      <p className="text-center text-white pt-1">
      Completed Tasks : { todos.filter((item)=>item.completed).length} out of ( {todos.length} )
      </p>
      <div  className=" col-12 px-2">
      <button className="btn col-12 btn-outline-danger" onClick={clearCompleted}> Clear completed </button>
      </div>

      <Todolist
        todos={todos}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>

  );

}

export default App;
