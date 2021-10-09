import {Card,Layout} from 'antd';

import 'antd/dist/antd.css';
import '../App.css'

function TodoList(props) {

    const { Header, Footer, Sider, Content } = Layout;

    const gridStyle = {
        width: '33%',
        textAlign: 'center',
      };
      

 const {todos} = props;

    return (
            <div>
                        <Card title="Card Title">
                        {
                            todos.map((todo,index)=>{
                            
                                return (
                                    
                                    <Card.Grid style={gridStyle} key={index}>
                                        {todo.title}
                                    </Card.Grid>
                                )
                            
                            })
                        }
                        </Card>
                
            </div>
    )
 }

export default TodoList;
