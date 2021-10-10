import React, {useState,useEffect}  from 'react';
import Todolist from './components/TodoList';
import TodoForm from './components/TodoForm';
import axios from 'axios' 
import {Typography,Layout,Row, Col, Card, PageHeader} from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;



function App() {

  const [todos, settodos] = useState([]);

  useEffect(() => {

      axios.get('http://localhost:5000/todos/')
        .then(function (response) {
          settodos(response.data);
        })


    },[todos]);

    

    const setCompletedMethod = (deltodo) =>{


      axios.put('http://localhost:5000/todos/'+deltodo.id+'/',{

      })
      .then(function (response) {
  
        const updatedTodos = todos.map((todo,index)=>{
  
          if  (deltodo.id ===deltodo.id ){

            return 

          }
          return todos;
  
        })

  
        settodos(updatedTodos);
      });    
  
    }



    const addTodoMethod = (newTodo) =>{



    axios.post('http://localhost:5000/todos/',newTodo)
    .then(function (response) {

      const updatedTodos = [
        ...todos,response.data
  
      ] 
      settodos(updatedTodos);
    });    

  }    

  const deleteTodoMethod = (todoID) =>{



    axios.delete('http://localhost:5000/todos/'+todoID+'/',)
    .then(function (response) {

      const updatedTodos = todos.filter((todo,index)=>{

        return todo.id !== todoID;


      }) 

      settodos(updatedTodos);
    });    

  }    


  return (  
    <>
    <Layout>
      <Header >
        <Title align="center"style={{color:"#fff"}}>My Todo App</Title>
      </Header>
      <Content>
        <Row
        justify="center"
        align="middle"
        gutter={[0, 20]}
        className="todos-container"
      >
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <PageHeader
            title="Add Todo"
            subTitle="To add a todo, just fill the form below and click in add todo."
          />
        </Col>

        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card title="Create a new todo">
            <TodoForm addTodoMethod={addTodoMethod}/>
          </Card>
        </Col>

        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 21 }}
          lg={{ span: 20 }}
          xl={{ span: 18 }}
        >
          <Card title="Todo List">
            <Todolist deleteTodoMethod={deleteTodoMethod} todos={todos} />  
          </Card>
        </Col>
      </Row>
    
      </Content>
      
      <Footer align="right" style={{ background:"azure",position:"fixed", bottom:"0px", width:"100%", color:"#000"}}>
      My Todo App ©2021 Created by Rishabh
      </Footer>
    </Layout>  
    </>
  );
}

export default App;
