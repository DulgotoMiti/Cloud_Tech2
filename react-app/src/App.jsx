import { useState } from 'react'
import React from 'react';
import Header from './Header';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tasks from './Tasks'

function App() {
  function Status(){
    
  }
 let [toDoTasks, setStatus] = useState([
    { id: 1, description: "sample", finished: false },
    { id: 2, description: "sample1", finished: false },
    { id: 3, description: "sample2", finished: false }
  ]);
  let [completedTasks, setCompleted] = useState([
    { id: 1, description: "sample3", finished: true },
    { id: 2, description: "sample4", finished: true },
    { id: 3, description: "sample5", finished: true }
  ]);
  return (
    <>
<div></div>
<Header/>
<Tasks tasks={toDoTasks} title="Задачи за изпълнение" />
<Tasks tasks={completedTasks} title="Изпълнени задачи" />
    </>
  )
}

export default App
