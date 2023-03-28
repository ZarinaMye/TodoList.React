import "./TodoList.css"

export const ShowTodoTask = ({todoTask, removeTodoTask, index, changeTaskisDone }) => {

    const handleClick = () => {

        removeTodoTask(index);
    };
    
    const handleChange = (e) => {
       
        changeTaskisDone(e.target.checked, index); 
    };

    const taskDone = todoTask.isDone === true ? 
    <p className="taskDone">Task done!</p>:<p className="taskUndone">Done?</p>
    
    const html = 
    (
       <li className="todoTask"> 
            <h3>{todoTask.task}</h3>
            <div className="todoTask__done"> 
                <input type = "checkbox" name="isDone" onChange={handleChange} 
                checked={todoTask.isDone} readOnly></input>
                {taskDone}
            </div> 
            <button onClick={handleClick}>Remove todo</button>
       </li>
    ); 
    return (
        <>
            {html} 
        </>
    ); 
};
 