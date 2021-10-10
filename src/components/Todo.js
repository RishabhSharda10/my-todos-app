import React,{useState} from 'react'
import {Card,Layout,Switch,Space } from 'antd';
import 'antd/dist/antd.css';
import '../App.css'
import { PlusCircleFilled, FormOutlined, MinusCircleOutlined,CloseOutlined, CheckOutlined } from '@ant-design/icons';


function Todo(props) {

    const [Edit, setEdit] = useState(false);
    const {todo,deleteTodoMethod,setCompletedMethod} = props;


     const onChangeCompleted = (checked) => {
        
        setCompletedMethod(todo);

      }
      


    const gridStyle = {
        textAlign: 'center',
        flex:1
      };
      


    return (
        <>

            <Card.Grid  style={gridStyle} >
            <Space>
            <span className={todo.Completed ? "strikeOut" : ""}>{todo.text}</span>
            <span><Switch size="small" onChange={onChangeCompleted} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /></span>
            <span onClick={()=>deleteTodoMethod(todo.id)}><MinusCircleOutlined style={{marginTop:"9px",  fontSize: '18px', color: 'red', cursor:'pointer' }} /></span>
            <span><FormOutlined style={{ marginTop:"9px", fontSize: '18px', color: 'gray', cursor:'pointer' }} /></span>
            </Space>
            </Card.Grid>
        </>
    )
}

export default Todo