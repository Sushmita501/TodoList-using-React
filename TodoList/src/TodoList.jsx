import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
   let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false}]);
   let [newTodo, setNewTodo] = useState("");

   let addNewTask = () => {
      setTodos((prevTodo) => {
         return [...prevTodo, {task: newTodo,id: uuidv4(), isDone: false} ]
      });
      setNewTodo("");
   };
   
   let updateTodoValue = (event) => {
      setNewTodo(event.target.value);
   };

   let deleteTodo = (id) => {
      setTodos((prevTodos)=>  todos.filter((prevTodos) => prevTodos.id != id));

   };

   let markAllDone = () => {
      setTodos( (prevTodos) => 
          prevTodos.map((todo) => {
         return {
            ...todo,
           isDone: true,
         };
      }));    
   };

   let markAsDone = (id) => {
       setTodos( (prevTodos) => 
          prevTodos.map((todo) => {
            if(todo.id == id){
               return {
                  ...todo,
                  isDone: true,
               };            
            }else{
               return todo;
            }
      }));  
   }

  
   return (
      <div>
         <input type="text" placeholder="add a task" name="" id="" value={newTodo}  onChange={updateTodoValue} /><br />
         <button onClick={addNewTask}>Add Task</button>
         <br /><br /><br />

         <hr />
         <h4>Tasks Todo</h4>
         <ul>
            {
               todos.map((todo)=> (
                 <li key={todo.id}>
                 <span style={ todo.isDone ? {textDecoration : "line-through"} : {}}>{todo.task}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <button onClick={ () => deleteTodo(todo.id)}>delete </button>&nbsp;&nbsp;&nbsp;
                 <button onClick={() => {markAsDone(todo.id)}}>Mark As Done</button>
                  </li> 
               ))
            }
         </ul><br></br>
         <button onClick={markAllDone}>Mark All As Done</button>
         
      </div>
   )
}