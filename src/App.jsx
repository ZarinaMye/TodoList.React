import './App.css';
import { Text } from './components/Text';
import { TodoTask } from './models/TodoTask';
import { ShowTodoList} from './components/ShowTodoList';
import { TodoForm } from './components/TodoForm';
import { useState } from 'react'; 

function App() {
 
  //kollar om ls finns, isåfall visa det el. tom array.
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("todoList") || "[]"));
  
  if (todoList.length === 0) { //om inget finns i ls, spar todoList dit 
    let todoList = [
      new TodoTask("Walk the dogs", false),
      new TodoTask("Feed the dogs", true),
      new TodoTask("Build a fence", false),
    ];  
    localStorage.setItem("todoList", JSON.stringify(todoList)); 
  }; 
  
  const removeTodoTask = (i) => { 
    
    let updatedTodoList = [...todoList];
    updatedTodoList.splice(i, 1); //blir en kortare
    setTodoList(updatedTodoList); 
    localStorage.setItem("todoList",JSON.stringify(updatedTodoList));//ls ändra
  };

  const addTodoTask = (task) => { 

    let newTodoTask = new TodoTask(task, false);
    setTodoList([...todoList, newTodoTask]); //lägger till en ny
    localStorage.setItem("todoList",JSON.stringify([...todoList, newTodoTask])); //lägger till en ny i ls
  };

  const sortUndoneTodoList = () => {

    let sortedTodoList = [...todoList];
    sortedTodoList.sort((a,b) => a.isDone - b.isDone);
    setTodoList([...sortedTodoList]);
    localStorage.setItem("todoList",JSON.stringify( [...sortedTodoList]));
  };

  const sortDoneTodoList = () => {

    let sortedTodoList = [...todoList];
    sortedTodoList.sort((a,b) => b.isDone - a.isDone);
    setTodoList([...sortedTodoList]);
    localStorage.setItem("todoList",JSON.stringify( [...sortedTodoList]));
  };

  const changeTaskisDone = (isDone, index) => { 
    
    let changeTodoTask = [...todoList]; //kopiera todoList
    changeTodoTask[index].isDone = isDone; //fånga den todoTask jag klickar på mha index, ändra isDone= isDone som klickas i. 
    setTodoList([...changeTodoTask]);
    localStorage.setItem("todoList",JSON.stringify( [...changeTodoTask]));  
  }; 
 
  return (
    <div className="App">
      <Text/>
      <TodoForm
        addTodoTask={addTodoTask} 
      />
      <ShowTodoList 
        todoList={todoList} 
        removeTodoTask={removeTodoTask}
        addTodoTask={addTodoTask} 
        changeTaskisDone={changeTaskisDone}  
        sortUndoneTodoList={sortUndoneTodoList} 
        sortDoneTodoList={sortDoneTodoList}
      />
    </div>
  ); 
};

export default App;