import { Card, Col, Row, Space } from 'antd';
import React from 'react';
import s from './teacher.module.css';
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

const { Meta } = Card;
type TIconId = 'facebook' | 'instagram';
interface IProps {
  img: {
    alt: string;
    src: string;
  };
  meta: {
    title: string;
    description: string;
    links: {
      id: TIconId;
      link: string;
    }[];
  };
}
const icons: Record<TIconId, JSX.Element> = {
  facebook: <FacebookOutlined className={`${s.icons} ${s.facebook}`} />,
  instagram: <InstagramOutlined className={`${s.icons} ${s.instagram}`} />,
};
const Teacher: React.FC<IProps> = ({ img, meta }) => (
  <Card hoverable style={{ width: 240 }} cover={<img alt={img.alt} src={img.src} />}>
    <Meta
      style={{ textAlign: 'center' }}
      title={meta.title}
      description={
        <Row>
          <Col style={{ textAlign: 'center' }} span={24}>
            {meta.description}
          </Col>
          <Col span={24}>
            <Space>
              {meta.links.map(({ id, link }) => {
                return (
                  <a href={link} key="link">
                    {icons[id]}
                  </a>
                );
              })}
            </Space>
          </Col>
        </Row>
      }
    />
  </Card>
);

export default Teacher;
