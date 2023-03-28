import { useState } from "react";
import { TodoTask } from "../models/TodoTask";

export const TodoForm = ({addTodoTask, task}) => {

    const [todoTask, setTodoTask] = useState(new TodoTask(" ")); 
  
    const handleSubmit = (e) => {
        e.preventDefault(); //För att hindra autm form saker
        addTodoTask(todoTask);
    };

    const handleChange = (e) => {
       
        setTodoTask(e.target.value);  
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Write a task"
                value={task} 
                onChange={handleChange} 
                required //Inbyggd val, kollar att fältet fylls i 
            />
            <button>Save</button>
        </form>
    ); 
};