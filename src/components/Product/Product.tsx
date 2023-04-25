import React from 'react';
import s from './product.module.css';
import { Card, Col, Row, Space, Button } from 'antd';

interface IProps {
  items: {
    title: string;
    description: string;
  }[];
}

const Product: React.FC<IProps> = ({ items }) => (
  <Row>
    <Col span={24}>
      <Card hoverable style={{ width: 240 }}>
        <Space direction="vertical" className={s.title}>
          {items.map(({ title }) => {
            return <span key="title">{title}</span>;
          })}
        </Space>
        <Space direction="vertical" className={s.description}>
          {items.map(({ description }) => {
            return <span key="description">{description}</span>;
          })}
        </Space>
        <div className={s.button}>
          <Button shape="round" style={{ backgroundColor: '#A171B7', color: 'white' }}>
            Записатись
          </Button>
        </div>
      </Card>
    </Col>
  </Row>
);
export default Product;
