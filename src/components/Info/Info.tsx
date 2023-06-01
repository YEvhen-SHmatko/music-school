import React from 'react';
import { Col, Row, Typography } from 'antd';

interface IProps {
  label: string;
  items: { id: string; label: string; value: string; isActive?: boolean }[];
}

const Info: React.FC<IProps> = ({ label: labelInfo, items }) => {
  return (
    <Row>
      <Col span={24}>
        <Typography.Title level={4}>{labelInfo.toUpperCase()}</Typography.Title>
      </Col>
      {items.map(({ id, label, value, isActive }) => {
        return (
          <React.Fragment key={id}>
            <Col span={8}>
              <Typography.Text type={isActive === true ? 'danger' : undefined}>
                {label.toUpperCase()}
              </Typography.Text>
            </Col>
            <Col span={16}>
              <Typography.Text type={isActive === true ? 'danger' : undefined}>
                {value.toUpperCase()}
              </Typography.Text>
            </Col>
          </React.Fragment>
        );
      })}
    </Row>
  );
};

export default Info;
