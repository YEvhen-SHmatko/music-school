import { Button, notification, Form, Input } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import React from 'react';
import s from './loginform.module.css';
const App: React.FC = () => {
  const onFinish = (values: any) => {
    notification.success({
      description: JSON.stringify(values, null, '\t'),
      message: 'We will call you soon ' + values.username,
    });
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    notification.error({
      message: Object.values(errorInfo.errorFields)
        .map(({ errors }) => errors.join(', '))
        .join(', '),
    });
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
