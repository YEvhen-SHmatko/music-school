import React from 'react';
import { Avatar, Button, Col, Row, Space, Typography } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';
import Icon from '../../assets/icon.svg';

const Header: React.FC = () => {
  return (
    <Row style={{ padding: '12px 28px' }}>
      <Col flex="134px">
        <Space wrap={false}>
          <Avatar size={30} icon={<img src={Icon} alt="test" />} />
          <Typography.Title style={{ fontSize: 8, textTransform: 'uppercase' }}>
            ПОЛТАВСЬКА ДИТЯЧА МУЗИЧНА ШКОЛА No 2 ІМ. В.П. ШАПОВАЛЕНКА{' '}
          </Typography.Title>
        </Space>
      </Col>
      <Col flex="auto">
        <Row justify="end" align="middle" gutter={8}>
          <Col>
            <UserOutlined />
          </Col>
          <Col>UK</Col>
          <Col>
            <Button style={{ background: '#E0E0E0' }} icon={<MenuOutlined />} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
