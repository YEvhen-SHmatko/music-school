import { Col, Row } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header, LogInForm, Links, Partners, Copyright } from './components';
import { Root, Introduction, Price, AboutUs } from './pages';

const App: React.FC = () => (
  <Row>
    <Col span={24}>
      <div className="root-container">
        <Header />
      </div>
    </Col>
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/price" element={<Price />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
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
        </Row>
      </div>
    </Col>
  </Row>
);

export default App;
