import { useState, useEffect } from 'react';
import '../App.css';
import Form from '../Form';
import List from '../List';

const defaultTodos = [
  { id: 1, text: "Köp kaffe", isDone: false },
  { id: 2, text: "Öppna campet", isDone: true },
  { id: 3, text: "Pusha till GitHub", isDone: false },
  { id: 4, text: "Boja Om", isDone: false },
];

const TodoUseEffect = () => {
  // 1. Läs från localStorage vid första renderingen (lazy state initialization)
  const [todos, setTodos] = useState(() => {
    try {
      const savedValues = localStorage.getItem("todos");
      return savedValues ? JSON.parse(savedValues) : defaultTodos;
    } catch (error) {
      console.error("Kunde inte läsa från localStorage:", error);
      return defaultTodos;
    }
  });

  // 2. Spara till localStorage varje gång `todos` uppdateras
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [text, setText] = useState("");

  function addTodo(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    setTodos([...todos, { id: Date.now(), text: trimmed, isDone: false }]);
    setText("");
  }

  function toggle(id) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <>
      <main className="main">
        <h1>Min ToDo</h1>

        <Form 
          text={text}
          addTodo={addTodo}
          setText={setText}
        />

        <List
          todos={todos}
          toggle={toggle}
          removeTodo={removeTodo}
        />
      </main>
    </>
  );
};

export default TodoUseEffect;
