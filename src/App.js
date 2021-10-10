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

      axios.get('https://6163510bb55edc00175c1a3a.mockapi.io/Todos')
        .then(function (response) {
          settodos(response.data);
        })


    },[todos]);

    

    const setCurrentMethod = (newTodo,newCurrrent) =>{

      axios.put('https://6163510bb55edc00175c1a3a.mockapi.io/api/rishabh/Todos/'+newTodo.id+'/',{...newTodo,
      current: newCurrrent
      })
      .then(function (response) {
  
        const updatedTodos = todos.map((todo,i)=>{
  
          if  (todo.id === newTodo.id){
  
            return {
              ...todo,
              current: newCurrrent
  
            };
  
  
          }
  
          return todo;
  
        });
        

        settodos(updatedTodos);
      });    
  
    }



    const addTodoMethod = (newTodo) =>{



    axios.post('https://6163510bb55edc00175c1a3a.mockapi.io/api/rishabh/Todos/',newTodo)
    .then(function (response) {

      const updatedTodos = [
        ...todos,response.data
  
      ] 
      settodos(updatedTodos);
    });    

  }    

  const deleteTodoMethod = (todoID) =>{



    axios.delete('https://6163510bb55edc00175c1a3a.mockapi.io/api/rishabh/Todos/'+todoID+'/',)
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
          <Card style={{marginTop:"50px"}}>
          <Title level={2} align="center"style={{color:"#000"}}>Todo list</Title>
            <TodoForm addTodoMethod={addTodoMethod}/>
            <Todolist setCurrentMethod={setCurrentMethod} deleteTodoMethod={deleteTodoMethod} todos={todos} />  

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
