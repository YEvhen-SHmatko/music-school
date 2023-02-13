import React from 'react';
import s from './partners.module.css';

interface IProps {
  items: {
    link: string;
    img: string;
    title: string;
    id: string;
  }[];
}

const Partners: React.FC<IProps> = ({ items }) => (
  <div className={s.container}>
    {items.map(({ link, img, title, id }) => (
      <a className={s.item} href={link} key={id}>
        <img className={s.images} src={img} alt={title} />
      </a>
    ))}
  </div>
);

export default Partners;
