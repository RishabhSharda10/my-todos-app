import {Card} from 'antd';
import 'antd/dist/antd.css';
import '../App.css'

import Todo from './Todo';

function TodoList(props) {



 const {todos,deleteTodoMethod} = props;

    return (
            <div>
                {
                    todos.map((todo,index)=>{
                    
                        return (
                            <Todo deleteTodoMethod={deleteTodoMethod} todo={todo} key={index} />
                        )
                    
                    })
                }
                
            </div>
    )
 }

export default TodoList;
