import { useCallback, useState } from "react";

export default function useCounter(initial: number = 0) {
  const [count, setCount] = useState(initial);
  const add = useCallback(function () {
    setCount((pre) => {
      return pre + 1;
    });
  }, []);
  const minus = useCallback(function () {
    setCount((pre) => {
      return pre - 1;
    });
  }, []);

  const reset = useCallback(function () {
    setCount(initial);
  }, [initial]);

  return { count, add, minus, reset };
}
