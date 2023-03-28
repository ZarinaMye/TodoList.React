import { ShowTodoTask } from "./ShowTodoTask";

export const ShowTodoList = 
({todoList, removeTodoTask, addTodoTask, changeTaskisDone, 
  isDone, sortUndoneTodoList, sortDoneTodoList }) => {

    const html = todoList.map((todoTask, i) => {
    
        return <ShowTodoTask todoTask={todoTask} key={i} index={i} 
            removeTodoTask={removeTodoTask} addTodoTask={addTodoTask} 
            changeTaskisDone={changeTaskisDone} isDone={isDone}
        />
    });

    const handleClick = (e, isDone) => {

        sortUndoneTodoList(e.target.value, isDone);
    };

    const handleDoneClick = (e, isDone) => {

        sortDoneTodoList(e.target.value, isDone);
    };

    return (
        <>
            <div> 
                <label>Sort Todo-list </label>
                <button onClick={handleClick}>Undone tasks first</button>
                <button onClick={handleDoneClick}>Done tasks first</button>
            </div>
            <ul className="todoList">
                {html}
            </ul>  
        </>
    );
};