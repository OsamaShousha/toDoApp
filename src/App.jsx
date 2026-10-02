import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    
  { id: 1, text: "Köp kaffe", isDone: false },
  { id: 2, text: "Öppna campet", isDone: true },
  {id: 3, text: "Pusha till GitHub", isDone: false }
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


















  return (
    <>
     <h1>Min ToDo</h1>
    <main className="main" >
         <form  className="form" onSubmit={addTodo}>
      <label >En todo till</label>
      <input type="text"
       className="input"
       value={text}
       
///Creating logic to add text when 
    onChange={(e)=>setText(e.target.value)}

         placeholder="Ny uppgift"
         />
      <button className="add" type="submit">Lägg till</button>
     </form>

     <ul className="meny">
     <button type="button"  className="toggel" >
         Saknar logik
     </button>{" "}


     <button type="button" className="delet" >Tar bort</button>

     </ul>
    </main>
  
    </>
  );
}

export default App
