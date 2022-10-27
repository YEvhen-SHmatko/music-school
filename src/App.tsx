import { Col, Row } from 'antd';
import React from 'react';
import { Header, Slider } from './components';

const SliderItem = ({ item }: { item: number }) => (
  <div style={{ width: 100, border: '1px solid #000' }}>{item}</div>
);
const App: React.FC = () => (
  <Row style={{ height: '100vh' }}>
    <Col span={24}>
      <Header />
    </Col>
    <Col span={24}>
      <Slider
        items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
        SliderItem={SliderItem}
        count_config={{ isDesktop: 3, isTablet: 2, isMobile: 1 }}
      />
    </Col>
    <Col span={24}>
      <Slider
        items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
        SliderItem={SliderItem}
        count_config={{ isDesktop: 4, isTablet: 3, isMobile: 2 }}
      />
    </Col>
  </Row>
);

export default App;
