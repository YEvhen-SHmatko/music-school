import { Col, Row } from 'antd';
import React from 'react';
import { Quote, Label, Slider, Product } from '../components';

const Price: React.FC = () => (
  <Row>
    <Col span={24}>
      <Quote quoteText="Every art tends to become music" autor="Peter Walter" />
    </Col>
    <Col span={24}>
      <div className="root-container">
        <Label labelText="ЦІНИ" />
        <Slider
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
          SliderItem={() => {
            return (
              <Product
                items={[
                  {
                    title: 'Індивідуальний урок \n 400грн/60хв',
                    description: '1 заняття \n вільний графік',
                  },
                ]}
              />
            );
          }}
        />
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

export default Price;
