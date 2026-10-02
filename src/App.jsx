import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    
  { id: 1, text: "Köp kaffe", isDone: false },
  { id: 2, text: "Öppna campet", isDone: true },
  {id: 3, text: "Pusha till GitHub", isDone: false },
  ]);

   const [text, setText] = useState("");


  return (
    <>
    <main className='main'>
         <form  className="form">
      <label htmlFor="">En todo till</label>
      <input type="text"
       className="input"
        value={text}
         placeholder="Ny uppgift"
         />
      <button className="add" type="submit">Lägg till</button>
     </form>

     <ul className="meny">
     <button type="button">

     </button>{" "}


     <button type="button">Tar bort</button>

     </ul>
    </main>
  
    </>
  );
}

export default App
