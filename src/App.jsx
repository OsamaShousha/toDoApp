import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    
  { id: 1, text: "Köp kaffe", isDone: false },
  { id: 2, text: "Öppna campet", isDone: true },
  {id: 3, text: "Pusha till GitHub", isDone: false },
  {id: 4, text: "Boja Om", isDone: false },
  ]);

   const [text, setText] = useState("");



   // Creating the logic to add a new Todo when the form is submitted
function addTodo(e){
   // Preventing the browser from submitting/reloading the page
  e.preventDefault();

  const trimmed = text.trim();
    // Stop if the input is empty
  if(!trimmed)return;
  // Creating a new Todo and adding it to the existing todos

  setTodos([...todos, {id:Date.now(), text: trimmed, isDone: false}]);

    // Clearing the input after adding the Todo
  setText("");
}



function toggle(id){
  setTodos(
    todos.map((t)=>(t.id === id ? {...t, isDone: !t.isDone}:t)));
}




function removeTodo(id){
  setTodos(todos.filter((t)=>t.id !==id));

}











  return (
    <>
     <h1>Min ToDo</h1>
    <main className="main" >
         <form  className="form" onSubmit={addTodo}>
      <label >En todo till</label>
      <input
       className="input"
       value={text}
       

    onChange={(e)=>setText(e.target.value)}

         placeholder="Ny uppgift"
         />
          
      <button className="add" type="submit">Lägg till</button>
     </form>


     <ol className="meny">
      {todos.map((t)=>(
        <li key={t.id}>


        <button  className='toggle' type="button" onClick={()=>toggle(t.id)}>

          {t.isDone ?  "Avmarkera" : "Klar"}
          
        </button>{" "}

         {t.text}{" "}
        
        
        
        <button  className='delet'type="button" onClick={()=>removeTodo(t.id)}>Tar bort</button>
        </li>
      ))}
      
    

     </ol>
    </main>
  
    </>
  );
}

export default App
