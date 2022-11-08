import { Typography } from 'antd';
import React from 'react';
import s from './quote.module.css';

interface IProps {
  quoteText: string;
  autor: string;
}

const Quote: React.FC<IProps> = ({ quoteText, autor }) => (
  <div className={s.container}>
    <Typography.Text className={s.quotetext}>{quoteText}</Typography.Text>
    <Typography.Text className={s.quotetext}>{autor}</Typography.Text>
  </div>
);

export default Quote;
