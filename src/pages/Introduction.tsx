import { Col, Row } from 'antd';
import React from 'react';
import { Quote, Label } from '../components';
import AboutSchool from 'src/components/AboutSchool/AboutSchool';

const Introduction: React.FC = () => (
  <Row>
    <Col span={24}>
      <Quote quoteText="Every art tends to become music" autor="Peter Walter" />
    </Col>
    <Col span={24}>
      <div className="root-container">
        <Label labelText="ЛАСКАВО ПРОСИМО ДО НАШОЇ ШКОЛИ" />
        <AboutSchool />
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

export default Introduction;
