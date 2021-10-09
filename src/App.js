import  React, {useState,useEffect}  from 'react';
import Todoform from './components/TodoForm';
import Todolist from './components/TodoList';
import './App.css';
import TodoForm from './components/TodoForm';
import axios from 'axios' 






function App() {

  const [todos, settodos] = useState([]);

  useEffect(() => {

      axios.get('http://localhost:5000/todos/')
        .then(function (response) {
          settodos(response.data);
        })


    },[todos]);


  const addTodoMethod = (newTodo) =>{



    axios.post('http://localhost:5000/todos/',newTodo)
    .then(function (response) {

      const updatedTodos = [
        ...todos,response.data
  
      ] 
      settodos(updatedTodos);
    });    

  }    


  return (
    <div className="container">

      <TodoForm addTodoMethod={addTodoMethod}/>
      <Todolist  todos={todos} />


    </div>
  );
}

export default App;
