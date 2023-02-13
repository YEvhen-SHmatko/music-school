import React from 'react';
import s from './copyright.module.css';

interface IProps {
  startDate: number;
  title: string;
}

const Copyright: React.FC<IProps> = ({ startDate, title }) => (
  <div className={s.container}> {`©${getPeriod(startDate)}. ${title}`}</div>
);
const getPeriod = (start: number) => {
  const date = new Date();
  return `${start < date.getFullYear() ? `${start}-${date.getFullYear()}` : date.getFullYear()}`;
};
export default Copyright;
