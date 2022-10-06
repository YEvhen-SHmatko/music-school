import React from 'react';
import { Avatar, Button, Col, Row, Space, Typography } from 'antd';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';

const App: React.FC = () => (
  <>
    <Row>
      <Col span={24}>
        <Row style={{ padding: '12px 28px' }}>
          <Col flex="134px">
            <Space wrap={false}>
              <Avatar size={30} />
              <Typography.Title style={{ fontSize: 8, textTransform: 'uppercase' }}>
                Полтавська дитяча музична школа №2 ім. В.П. Шаповаленка
              </Typography.Title>
            </Space>
          </Col>
          <Col flex="auto">
            <Row justify="end" align="middle" gutter={8}>
              <Col>
                <UserOutlined />
              </Col>
              <Col>US</Col>
              <Col>
                <Button style={{ background: '#727272' }} icon={<MenuOutlined />} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col span={24} style={{ position: 'relative' }}>
        <div
          style={{
            backgroundImage: 'url(/img/BG.png)',
            position: 'absolute',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            zIndex: -1,
            top: 0,
            left: 0,
          }}
        />
        <Row style={{ padding: '120px 30px', height: 440 }} justify="center" align="stretch">
          <Col span={24}>
            <Typography.Text>
              <div
                style={{
                  color: '#F2F2F2',
                  fontSize: 22,
                  textAlign: 'center',
                }}
              >
                Щиро запрошуємо до Полтавської дитячої музичної школа №2 ім. В.П.Шаповаленка
              </div>
            </Typography.Text>
          </Col>
          <Col style={{ height: 'min-content' }}>
            <Button style={{ background: '#CB7A30' }}>Create</Button>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>
);

export default App;
