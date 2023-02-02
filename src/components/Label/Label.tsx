import { Typography } from 'antd';
import React from 'react';
import s from './label.module.css';

interface IProps {
  labelText: string;
}

const Label: React.FC<IProps> = ({ labelText }) => (
  <div className={s.container}>
    <div className={`root-container ${s.content}`}>
      <Typography.Text className={s.labeltext}>{labelText}</Typography.Text>
    </div>
  </div>
);

export default Label;
