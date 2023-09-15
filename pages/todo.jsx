import { useState } from "react";
import classes from "./todo.module.css";

export default function Todo({todo}) {
    // declare a state isCompleted to false
    const [isCompleted, setIsCompleted]=useState(false)
    
    // create a function to change the value of our state
    function completedHandle() {    
        console.log(todo);
        // set isCompleted to true
        setIsCompleted(true)
    }


      function undoHandle() {
        setIsCompleted(false);
      }
    
      return (
        <div className={isCompleted ? classes.completed : ""}>
          <li>{todo}</li>
          <button onClick={completedHandle}>Completed</button>
          <button onClick={isCompleted ? undoHandle : completedHandle}>
            {isCompleted ? "" : ""} Undo
          </button>
        </div>
      );
    }
    


