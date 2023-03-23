import { Col, Row } from 'antd';
import React from 'react';
import {
  Department,
  Label,
  Slider,
  Baner,
  Quote,
  Teacher,
  BackgroundContainer,
} from '../components';

const Root: React.FC = () => (
  <Row>
    <Col span={24}>
      <BackgroundContainer backgroundImage="/img/BG.png">
        <div className="root-container">
          <Baner />
        </div>
      </BackgroundContainer>
    </Col>
    <Col span={24}>
      <Quote quoteText="Every art tends to become music" autor="Peter Walter" />
    </Col>
    <Col span={24}>
      <div className="root-container">
        <Label labelText="ВІДДІЛИ" />
        <Slider
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
          SliderItem={() => (
            <Department
              img={{ alt: 'Department', src: '/img/card-picture.jpg' }}
              meta={{ title: 'Music department', description: 'Details' }}
            />
          )}
        />
      </div>
    </Col>
    <Col span={24}>
      <BackgroundContainer backgroundImage="/img/IMAGE.png">
        <div className="root-container">
          <Label labelText="ВИКЛАДАЧІ" />
          <Slider
            items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
            SliderItem={() => {
              return (
                <Teacher
                  img={{ alt: 'Teachers', src: '/img/teacher-img.jpg' }}
                  meta={{
                    title: 'Наталія Шаповал',
                    description: 'Естрадний відділ',
                    links: [{ id: 'facebook', link: 'www.facebook.com' }],
                  }}
                />
              );
            }}
          />
        </div>
      </BackgroundContainer>
    </Col>
    <Col span={24}>
      <Quote
        quoteText="Музика - могутнє джерело думки. Без музичного виховання неможливий повноцінний розумовий розвиток."
        autor="Василь Олександрович Сухомлинський"
      />
    </Col>
  </Row>
);

export default Root;
