import React from 'react';
import { Col, Row, Button, Typography } from 'antd';
const Baner: React.FC = () => {
  return (
    <div>
      <Row>
        <Col span={24} style={{ position: 'relative' }}>
          <div
            style={{
              backgroundImage: 'url(/img/BG.png)',
              position: 'absolute',
              backgroundSize: 'cover',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
            }}
          />
          <Row style={{ padding: '120px 30px', height: 440 }} justify="center" align="stretch">
            <Col span={24}>
              <Typography.Text>
                <div
                  style={{
                    color: '#F2F2F2',
                    fontSize: 22,
                    textAlign: 'center',
                  }}
                >
                  Щиро запрошуємо до Полтавської дитячої музичної школа №2 ім. В.П.Шаповаленка
                </div>
              </Typography.Text>
            </Col>
            <Col style={{ height: 'min-content' }}>
              <Button style={{ background: '#CB7A30' }}>Записатися</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      ;
    </div>
  );
};

export default Baner;
