import { useRef } from 'react';

/**
 * 获取最新 value
 * @param fn
 * @returns
 */
const UseLatest = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};
export default UseLatest;
