import React from 'react';
import { Col, Row, Button, notification } from 'antd';
import s from './baner.module.css';

const Baner: React.FC = () => {
  return (
    <Row className={s.block_text}>
      <Col span={24}>
        <span className={s.text}>
          Щиро запрошуємо до Полтавської дитячої музичної школа №2 ім. В.П.Шаповаленка
        </span>
      </Col>
      <Col className={s.block_button}>
        <Button
          className={s['button-style']}
          onClick={() => {
            notification.error({ message: 'do not work' });
          }}
        >
          Записатися
        </Button>
      </Col>
    </Row>
  );
};

export default Baner;
