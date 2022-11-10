import React from 'react';
import { Col, Row, Button } from 'antd';
import s from './baner.module.css';

const Baner: React.FC = () => {
  return (
    <Row>
      <Col span={24} className={s.block_img}>
        <div
          className={s.background}
          style={{
            backgroundImage: 'url(/img/BG.png)',
          }}
        />
        <Row className={s.block_text}>
          <Col span={24}>
            <span className={s.text}>
              Щиро запрошуємо до Полтавської дитячої музичної школа №2 ім. В.П.Шаповаленка
            </span>
          </Col>
          <Col className={s.block_button}>
            <Button className={s['button-style']}>Записатися</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Baner;
