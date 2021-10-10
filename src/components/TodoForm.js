import React,{useState,useRef} from 'react'
import 'antd/dist/antd.css';
import {Typography,Layout,Row,Col,Form, Input, Button, Checkbox,Space} from 'antd';
import { PlusCircleFilled} from '@ant-design/icons';



function TodoForm(props) {
    const [form] = Form.useForm();

    const [input, setInput] = useState('');
    const {addTodoMethod} = props;

    const onChangeHandler = (event) =>{
        setInput(event.target.value)
        
        
    }

    const onFinish = (values) => {
        console.log('Success:', values.todoName);

        addTodoMethod({
            text:input,
            current:0,



        });
        
        setInput('') 
        form.resetFields();

      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


    return (
    <>
        <Form
            name="basic"
            form={form}
            initialValues={{ remember: true }}
            layout="horizontal"            
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="horizontal"
        >
              <Row gutter={10}>

                <Col xs={24} sm={24} md={12} lg={15} xl={15}>
                    <Form.Item 
                        wrapperCol={{ offset: 8, span: 24 }}                
                        name="todoName"
                        rules={[{ required: true, message: 'This feild is required' }]}
                    >
                        <Input name="content" placeholder="What needs to be done?" onChange={onChangeHandler} />
                    </Form.Item>
                </Col>
                
                <Col xs={24} sm={24} md={5} lg={5} xl={4}>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" block>
                        <PlusCircleFilled/>
                        Add Todo
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
            
    </>
    )
}

export default TodoForm;
