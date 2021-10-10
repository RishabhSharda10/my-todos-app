import React,{useState} from 'react'
import {Switch,Steps,Space,Popconfirm,Divider  } from 'antd';
import 'antd/dist/antd.css';
import '../App.css'
import { ScheduleOutlined, MinusCircleOutlined,CloseOutlined, CheckOutlined } from '@ant-design/icons';


function Todo(props) {


    const [Edit, setEdit] = useState(false);
    const {todo,deleteTodoMethod,setCurrentMethod} = props;
    const [current, setCurrent] = useState(todo.current);
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const { Step } = Steps;


    const handleOk = () => {
      setConfirmLoading(true);
      setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      deleteTodoMethod(todo.id)
      }, 1000);
    };

    const onChangeStep = current => {
      setCurrent(current);
      setCurrentMethod(todo,current);


    };
  
    const handleCancel = () => {
      setVisible(false);
    };



      const showPopconfirm = () => {
        setVisible(true);
      };
    
      

    return (
        <>

            <Space>
              <span>{todo.text}</span>
              {/* <span>
                <Switch size="small" defaultChecked={todo.completed ? true : false}  onChange={onChangeCompleted} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
              </span> */}
              <Popconfirm  title="Title"
                visible={visible}
                onConfirm={handleOk}
                okButtonProps={{ loading: confirmLoading }}
                onCancel={handleCancel}
                title="Are you sure？" okText="Yes" cancelText="No">
                <span onClick={showPopconfirm}>
                  <MinusCircleOutlined style={{  fontSize: '18px', float:"right", color: 'red', cursor:'pointer' }} />
                </span>
              </Popconfirm>

            </Space>

            <Divider/>
            <Steps  current={current} size="small" onChange={onChangeStep}  >
              <Step title="Waiting" description=""  />
              <Step title="In Progress" description=""  />
              <Step title="Finished" description="" icon={<ScheduleOutlined />}/>
            </Steps>            
        </>
    )
}

export default Todo