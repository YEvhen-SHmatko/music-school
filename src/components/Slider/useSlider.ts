import React from 'react';
import { useMediaQuery } from 'react-responsive';

export interface ICountConfig {
  isDesktop: number;
  isTablet: number;
  isMobile: number;
}
interface IInput {
  count_config: ICountConfig;
  length: number;
}
interface IOutput<T> {
  count: number;
  offset: number;
  createRenderData: (arr: T[], count: number, offset: number) => T[];
  handleStartArrow: () => void;
  handleEndArrow: () => void;
}

const useSlider = <T>({ length, count_config }: IInput): IOutput<T> => {
  const [offset, setOffset] = React.useState(0);

  const [count, setCount] = React.useState(3);

  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 413, maxWidth: 1440 });
  const isMobile = useMediaQuery({ maxWidth: 413 });
  React.useEffect(() => {
    if (isDesktop) {
      setCount(count_config.isDesktop);
    }
    if (isTablet) {
      setCount(count_config.isTablet);
    }
    if (isMobile) {
      setCount(count_config.isMobile);
    }
  }, [isDesktop, isTablet, isMobile, count_config]);

  const createRenderData = (arr: T[], count: number, offset: number): T[] =>
    arr.slice(offset, offset + count);

  const handleStartArrow = () => {
    setOffset((p) => (p > 0 ? p - 1 : 0));
  };

  const handleEndArrow = () => {
    setOffset((p) => (p + count >= length ? length - count : p + 1));
  };
  return { count, offset, createRenderData, handleStartArrow, handleEndArrow };
};

export default useSlider;
