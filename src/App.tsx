import { Col, Row } from 'antd';
import React from 'react';
import { Department, Header, Label, Slider, Baner, Quote, LogInForm, Teacher } from './components';
import Links from './components/Links';

const SliderItem = ({ item }: { item: number }) => (
  <Department
    img={{ alt: 'Department', src: '/img/card-picture.jpg' }}
    meta={{ title: 'Music department', description: 'Details' }}
  />
);

const App: React.FC = () => (
  <Row>
    <Col span={24}>
      <div className="root-container">
        <Header />
      </div>
    </Col>
    <Col span={24}>
      <Baner />
    </Col>
    <Col span={24}>
      <Quote quoteText="Every art tends to become music" autor="Peter Walter" />
    </Col>
    <Col span={24}>
      <Label labelText="ВІДДІЛИ" />
    </Col>
    <Col span={24}>
      <div className="root-container">
        <Slider items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]} SliderItem={SliderItem} />
      </div>
    </Col>
    <Col span={24}>
      <Label labelText="ВИКЛАДАЧІ" />
    </Col>
    <Col span={24}>
      <div className="root-container">
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
    </Col>
    <Col span={24}>
      <Quote
        quoteText="Музика - могутнє джерело думки. Без музичного виховання неможливий повноцінний розумовий розвиток."
        autor="Василь Олександрович Сухомлинський"
      />
    </Col>
    <Col span={24}>
      <div className="root-container">
        <Row>
          <Col xs={24} lg={12}>
            <Links
              items={[
                {
                  id: 'location',
                  link: 'www.google.com',
                  title: ' 36015, м.Полтава, вул.Сакко 14',
                },
                { id: 'phone', link: 'tel:+3809887797', title: '(0532)51-27-19' },
                { id: 'facebook', link: 'www.facebook.com', title: 'Facebook' },
                { id: 'instagram', link: 'www.instagram.com', title: 'Instagram' },
              ]}
            />
          </Col>
          <Col xs={24} lg={12}>
            <LogInForm />
          </Col>
          <Col span={24}> partners </Col>
        </Row>
      </div>
    </Col>
  </Row>
);

export default App;
