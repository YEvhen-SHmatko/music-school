import { Button, Form, Input } from 'antd';
import React from 'react';
import s from './loginform.module.css';
const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className={s.container}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={'email'}
        label="Email"
        rules={[{ type: 'email', required: true, message: 'Please input your Email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="коментар" name="coment">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Call me back
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
