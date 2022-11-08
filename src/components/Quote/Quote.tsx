import { Typography } from 'antd';
import React from 'react';
import s from './quote.module.css';

const Quote: React.FC = () => (
  <div className={s.container}>
    <Typography.Text style={{ fontSize: 8 }}>every art tends to become music</Typography.Text>
    <Typography.Text style={{ fontSize: 8 }}>Autor</Typography.Text>
  </div>
);

export default Quote;
