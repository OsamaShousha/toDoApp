import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    
  { id: 1, text: "Köp kaffe", isDone: false },
  { id: 2, text: "Öppna campet", isDone: true },
  {id: 3, text: "Pusha till GitHub", isDone: false },
  ]);

   const [text, setText] = useState("");



function addTodo(e){
  e.preventDefault();

  const trimmed = text.trim();
  if(!trimmed)return;
}


















  return (
    <>
     <h1>Min ToDo</h1>
    <main className='main' onChange={addTodo}>
         <form  className="form">
      <label >En todo till</label>
      <input type="text"
       className="input"
       value={text}
       
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
