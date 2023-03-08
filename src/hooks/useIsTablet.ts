import { useMediaQuery } from 'react-responsive';
import { DESKTOP_MIN_WIDTH, MOBILE_MAX_WIDTH } from 'src/constants';

const useIsTablet = (): boolean => {
  return useMediaQuery({ minWidth: MOBILE_MAX_WIDTH, maxWidth: DESKTOP_MIN_WIDTH });
};

export default useIsTablet;
