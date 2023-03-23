import { Col, Row } from 'antd';
import React from 'react';
import { Quote } from '../components';

const AboutUs: React.FC = () => (
  <Row>
    <Col span={24}>
      <Quote quoteText="Every art tends to become music" autor="Peter Walter" />
    </Col>
    AboutUs
    <Col span={24}>
      <Quote
        quoteText="Музика - могутнє джерело думки. Без музичного виховання неможливий повноцінний розумовий розвиток."
        autor="Василь Олександрович Сухомлинський"
      />
    </Col>
  </Row>
);

export default AboutUs;
