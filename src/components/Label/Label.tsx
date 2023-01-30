import { Typography } from 'antd';
import React from 'react';
import s from './label.module.css';

interface IProps {
  labelText: string;
  labelLine: string;
}

const Label: React.FC<IProps> = ({ labelText, labelLine }) => (
  <div className={s.container}>
    <div className={`root-container ${s.content}`}>
      <Typography.Text className={s.labeltext}>{labelText}</Typography.Text>
      <Typography.Text className={s.labelline}>{labelLine}</Typography.Text>
    </div>
  </div>
);

export default Label;
