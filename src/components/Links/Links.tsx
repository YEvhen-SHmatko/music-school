import React from 'react';
import s from './links.module.css';
import { Col, Row, Space } from 'antd';
import {
  InstagramOutlined,
  FacebookOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

type LIconId = 'facebook' | 'instagram' | 'phone' | 'location';

interface IProps {
  items: {
    id: LIconId;
    link: string;
    title: string;
  }[];
}

const icons: Record<LIconId, JSX.Element> = {
  location: <EnvironmentOutlined className={`${s.icons} `} />,
  phone: <PhoneOutlined className={`${s.icons} `} />,
  facebook: <FacebookOutlined className={`${s.icons} ${s.facebook}`} />,
  instagram: <InstagramOutlined className={`${s.icons} ${s.instagram}`} />,
};

const Links: React.FC<IProps> = ({ items }) => (
  <Row>
    <Col span={24}>
      <Space direction="vertical" className={s.links_block}>
        {items.map(({ id, link, title }) => {
          return (
            <a href={link} key="location" style={{ color: 'white' }} className={s.item}>
              {icons[id]}
              <span>{title}</span>
            </a>
          );
        })}
      </Space>
    </Col>
  </Row>
);

export default Links;
