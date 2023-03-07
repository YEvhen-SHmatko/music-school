import { Col, Row } from 'antd';
import React from 'react';
import {
  Department,
  Header,
  Label,
  Slider,
  Baner,
  Quote,
  LogInForm,
  Teacher,
  Links,
  Partners,
  Copyright,
  BackgroundContainer,
} from './components';

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
      <Label labelText="ВІДДІЛИ" />
    </Col>
    <Col span={24}>
      <div className="root-container">
        <Slider items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]} SliderItem={SliderItem} />
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
          <Col span={24}>
            <Partners
              items={[
                {
                  link: 'https://google.com',
                  img: '/img/image10.png',
                  title: 'partner1',
                  id: 'partner1',
                },
                {
                  link: 'https://google.com',
                  img: '/img/image11.png',
                  title: 'partner2',
                  id: 'partner2',
                },
                {
                  link: 'https://google.com',
                  img: '/img/image12.png',
                  title: 'partner3',
                  id: 'partner3',
                },
                {
                  link: 'https://google.com',
                  img: '/img/image13.png',
                  title: 'partner4',
                  id: 'partner4',
                },
              ]}
            />
          </Col>
          <Col span={24}>
            <Copyright startDate={2022} title={'Полтавська  дитяча  музична  школа №2.'} />
          </Col>
        </Row>
      </div>
    </Col>
  </Row>
);

export default App;
