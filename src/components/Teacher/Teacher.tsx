import { Card, Col, Row } from 'antd';
import React from 'react';

const { Meta } = Card;
interface IProps {
  img: {
    alt: string;
    src: string;
  };
  meta: {
    title: string;
    description: string;
    links: {
      id: 'facebook' | 'telegram';
      link: string;
    }[];
  };
}
const Teacher: React.FC<IProps> = ({ img, meta }) => (
  <Card hoverable style={{ width: 240 }} cover={<img alt={img.alt} src={img.src} />}>
    <Meta
      title={meta.title}
      description={
        <Row>
          <Col span={24}>{meta.description}</Col>
          <Col span={24}>
            {meta.links.map(({ id, link }) => {
              return (
                <a href={link} key={link}>
                  {id}
                </a>
              );
            })}
          </Col>
        </Row>
      }
    />
  </Card>
);

export default Teacher;
