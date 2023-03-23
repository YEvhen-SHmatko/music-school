import { Col, Row } from 'antd';
import React from 'react';
import { Label, Map, Quote } from '../components';

const AboutUs: React.FC = () => (
  <Row>
    <Col span={24}>
      <Quote quoteText="Every art tends to become music" autor="Peter Walter" />
    </Col>
    <Col span={24}>
      <div className="root-container">
        <Label labelText="Як нас знайти" />
        <Map width="100%" height="400px" />
      </div>
    </Col>
    <Col span={24}>
      <Quote
        quoteText="Музика - могутнє джерело думки. Без музичного виховання неможливий повноцінний розумовий розвиток."
        autor="Василь Олександрович Сухомлинський"
      />
    </Col>
  </Row>
);

export default AboutUs;
