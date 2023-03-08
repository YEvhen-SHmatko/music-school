import React from 'react';
import s from './menu.module.css';

interface IProps {
  items: {
    label: string;
    path: string;
  }[];
}

const Menu: React.FC<IProps> = ({ items }) => {
  return (
    <div className={s.container}>
      {items.map(({ label, path }) => {
        return (
          <a href={path} key={path} className={s.item}>
            {label}
          </a>
        );
      })}
    </div>
  );
};

export default Menu;
