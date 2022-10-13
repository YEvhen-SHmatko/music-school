import React from 'react';
import { Button } from 'antd';
import s from './slider.module.css';
import { useMediaQuery } from 'react-responsive';

interface IProps<T> {
  items: T[];
  SliderItem: (props: { item: T }) => JSX.Element;
}

const Slider = <T,>({ items, SliderItem }: IProps<T>): JSX.Element => {
  const [offset, setOffset] = React.useState(0);

  const [count, setCount] = React.useState(3);

  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 413, maxWidth: 1440 });
  const isMobile = useMediaQuery({ maxWidth: 413 });
  React.useEffect(() => {
    if (isDesktop) {
      setCount(3);
    }
    if (isTablet) {
      setCount(2);
    }
    if (isMobile) {
      setCount(1);
    }
  }, [isDesktop, isTablet, isMobile]);
  const length = items.length;

  const createRenderData = (arr: T[], count: number, offset: number): T[] =>
    arr.slice(offset, offset + count);

  const handleStartArrow = () => {
    setOffset((p) => (p > 0 ? p - 1 : 0));
  };

  const handleEndArrow = () => {
    setOffset((p) => (p + count >= length ? length - count : p + 1));
  };
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
