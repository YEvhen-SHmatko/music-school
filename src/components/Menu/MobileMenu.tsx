import React from 'react';
import s from './menu.module.css';
import { MenuOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface IProps {
  items: {
    label: string;
    path: string;
  }[];
}

const MobileMenu: React.FC<IProps> = ({ items }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {isOpen && (
        <div className={s.container}>
          <div className={s.menu}>
            <div className={s.header}>
              <Button
                onClick={() => {
                  setIsOpen(false);
                }}
                style={{ background: 'transparent' }}
                icon={<MenuOutlined />}
              />
            </div>
            <div className={s.content}>
              {items.map(({ label, path }) => {
                return (
                  <a href={path} key={path} className={s.item}>
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
        style={{ background: '#E0E0E0' }}
        icon={<MenuOutlined />}
      />
    </>
  );
};

export default MobileMenu;
