import { useEffect } from 'react';

/**
 * 组件加载时运行
 * @param fn
 * @returns
 */
const UseMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  }, []);
};
export default UseMount;
