import {Card,List} from 'antd';
import 'antd/dist/antd.css';
import '../App.css'

import Todo from './Todo';

function TodoList(props) {



 const {todos,deleteTodoMethod,setCurrentMethod } = props;

    return (
            <>
                 <Card 
                   justify="center"
                   align="middle"
                   grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                  }}
                   className="">
                {
                   
                        todos.map((todo,index)=>{

                            return (
                                <Card.Grid key={index} >                                
                                <Todo setCurrentMethod={setCurrentMethod} deleteTodoMethod={deleteTodoMethod} todo={todo}  />
                                </Card.Grid>
                            )
                            
                        
                        })
                                  
                }
                </Card>  
                
            </>
    )
 }

export default TodoList;
