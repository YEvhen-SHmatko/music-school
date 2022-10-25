import { Card, Button } from 'antd';
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
  };
}
const Department: React.FC<IProps> = ({ img, meta }) => (
  <Card hoverable style={{ width: 240 }} cover={<img alt={img.alt} src={img.src} />}>
    <Meta
      title={meta.title}
      description={
        <Button type="primary" shape="round">
          {meta.description}
        </Button>
      }
    />
  </Card>
);

export default Department;
