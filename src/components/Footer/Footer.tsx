import React from 'react';
import { Col, Row } from 'antd';
import LogInForm from '../LogInForm';
import Links from '../Links';
import Partners from '../Partners';
import Copyright from '../Copyright';
import s from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={s.container}>
      <div className="root-container">
        <Row gutter={[40, 40]}>
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
    </div>
  );
};

export default Footer;
