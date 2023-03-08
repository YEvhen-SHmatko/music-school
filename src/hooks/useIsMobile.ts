import { useMediaQuery } from 'react-responsive';
import { MOBILE_MAX_WIDTH } from 'src/constants';

const useIsMobile = (): boolean => {
  return useMediaQuery({ maxWidth: MOBILE_MAX_WIDTH });
};

export default useIsMobile;
