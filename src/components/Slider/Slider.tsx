import React from 'react';
import { Button } from 'antd';
import s from './slider.module.css';
import useSlider, { ICountConfig } from './useSlider';

interface IProps<T> {
  items: T[];
  SliderItem: (props: { item: T }) => JSX.Element;
  count_config: ICountConfig;
}

const Slider = <T,>({ items, SliderItem, count_config }: IProps<T>): JSX.Element => {
  const length = items.length;

  const { count, offset, createRenderData, handleStartArrow, handleEndArrow } = useSlider<T>({
    length,
    count_config,
  });
  return (
    <div className={s.container}>
      <Button
        type="text"
        icon={<div>{'<'}</div>}
        onClick={handleStartArrow}
        disabled={offset === 0}
      />
      <div className={s.slides_scroll}>
        <div className={s.slides}>
          {createRenderData(items, count, offset).map((i) => (
            <SliderItem key={`${i}`} item={i} />
          ))}
        </div>
      </div>
      <Button
        type="text"
        icon={<div>{'>'}</div>}
        onClick={handleEndArrow}
        disabled={offset + count >= length}
      />
    </div>
  );
};

export default Slider;
