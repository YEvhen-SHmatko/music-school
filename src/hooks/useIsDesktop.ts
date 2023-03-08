import { useMediaQuery } from 'react-responsive';
import { DESKTOP_MIN_WIDTH } from 'src/constants';

const useIsDesktop = (): boolean => {
  return useMediaQuery({ minWidth: DESKTOP_MIN_WIDTH });
};

export default useIsDesktop;
