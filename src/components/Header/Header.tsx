import React from 'react';
import { Avatar, Col, Row, Space, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Icon from '../../assets/icon.svg';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';
import { useMediaQuery } from 'react-responsive';

const Header: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 413, maxWidth: 1440 });
  const isMobile = useMediaQuery({ maxWidth: 413 });
  return (
    <Row style={{ padding: '12px 28px' }}>
      <Col flex="134px">
        <Space wrap={false}>
          <Avatar size={30} icon={<img src={Icon} alt="test" />} />
          <Typography.Title style={{ fontSize: 8, textTransform: 'uppercase' }}>
            ПОЛТАВСЬКА ДИТЯЧА МУЗИЧНА ШКОЛА No 2 ІМ. В.П. ШАПОВАЛЕНКА{' '}
          </Typography.Title>
        </Space>
      </Col>
      <Col flex="auto">
        <Row justify="end" align="middle" gutter={8}>
          {isDesktop && (
            <Col>
              <Menu
                items={[
                  { label: 'first', path: '/#' },
                  { label: 'second', path: '/#1' },
                ]}
              />
            </Col>
          )}
          <Col>
            <UserOutlined />
          </Col>
          <Col>UK</Col>
          {(isMobile || isTablet) && (
            <Col>
              <MobileMenu
                items={[
                  { label: 'first', path: '/#' },
                  { label: 'second', path: '/#1' },
                ]}
              />
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
