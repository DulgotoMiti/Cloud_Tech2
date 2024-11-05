import React from 'react';
import imgTodo from './assets/todo.png'
import imgCompleted from './assets/completed.png'


function Tasks({ tasks, title, changeState}) {
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.description}
              <img src={task.finished ? imgCompleted : imgTodo} height="20" />
              {!task.finished && (
                <button onClick={()=>changeState(task)}>Завърши</button>
              )}
              {task.finished && (
                <button onClick={()=>changeState(task)}>Неизпълнена</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Tasks;
  