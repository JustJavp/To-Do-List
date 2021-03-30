import React, { useState, useEffect } from "react";
import './App.css';
/* Importing componets */
import Form from './componets/form';
import TodoList from './componets/todoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

/* Get back local Storage information  */
  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem('todos'));
        setTodos(todoLocal); 
      }
    }
    /* Calling Functions */
    getLocalTodos();
  }, []);
  



  /* Filtering todos & save items in local storage */
  useEffect(() => { 
    /* Filtering items */
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  /* Save Items to Local Storage */
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  /* Callign functions */
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);


  /* Printing components */
  return (
    <div className="App">
      <header>
        <h1 className="header">Lista de tareas</h1>
      </header>
      <Form className="form"
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
