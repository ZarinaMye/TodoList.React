export class TodoTask {
  
  task;
  isDone; //För att kunna ändra mellan klar eller oklar, lifting state up status, 
  //behövs den verkligen eller kan checkrutan vara i showtodotask endast..?
  
  constructor(task, isDone) {
    this.task = task;
    this.isDone = isDone; 
  }
}