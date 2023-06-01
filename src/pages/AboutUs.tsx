import { Col, Row } from 'antd';
import React from 'react';
import { Label, Map, Quote, Info } from '../components';

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
      <div className="root-container">
        <Row style={{ padding: '20px 0' }} gutter={[8, 40]}>
          <Col xs={24} md={12}>
            <Info
              label="Adress"
              items={[
                { id: '1', label: 'telephone', value: '2345567789' },
                { id: '2', label: 'email', value: 'dfgh@dfgh.dfg' },
              ]}
            />
          </Col>
          <Col xs={{ span: 0 }} md={12} />
          <Col xs={24} md={12}>
            <Info
              label="Adress"
              items={[
                { id: '1', label: 'telephone', value: '2345567789' },
                { id: '2', label: 'email', isActive: true, value: 'dfgh@dfgh.dfg' },
              ]}
            />
          </Col>
          <Col xs={24} md={12}>
            <Info
              label="Adress"
              items={[
                { id: '1', label: 'Working hours', value: '8:00-20:00' },
                { id: '2', label: 'email', isActive: true, value: 'dfgh@dfgh.dfg' },
              ]}
            />
          </Col>
        </Row>
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
