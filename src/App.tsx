import { Col, Row } from 'antd';
import React from 'react';
import { Department, Header, Slider } from './components';
import Quote from './components/Quote/Quote';

const SliderItem = ({ item }: { item: number }) => (
  <Department
    img={{ alt: 'Department', src: '/img/card-picture.jpg' }}
    meta={{ title: 'Music department', description: 'Details' }}
  />
);
const App: React.FC = () => (
  <Row style={{ height: '100vh' }}>
    <Col span={24}>
      <Header />
    </Col>
    <Col span={24}>
      <Quote />
    </Col>
    <Col span={24}>
      <Slider items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]} SliderItem={SliderItem} />
    </Col>
  </Row>
);

export default App;
