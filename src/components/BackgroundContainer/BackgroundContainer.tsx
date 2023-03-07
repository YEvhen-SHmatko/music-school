import React from 'react';
import { Col, Row } from 'antd';
import s from './backgroundContainer.module.css';

interface IProps {
  backgroundImage: string;
  children: JSX.Element;
}

const BackgroundContainer: React.FC<IProps> = ({ backgroundImage, children }) => {
  return (
    <Row>
      <Col span={24} className={s.container}>
        <div
          className={s.background}
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        {children}
      </Col>
    </Row>
  );
};

export default BackgroundContainer;
