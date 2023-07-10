"use client";

import { useCallback, useMemo } from "react";
import "./index.css";
import useAsync from "./useAsync";
import useCounter from "./useCounter";
import ScrollTop from "./components/ScrollTop";

export default function Home() {
  /// 1 自定义hook
  const { count, add, minus, reset } = useCounter(100);
  const {
    count: count2,
    add: add2,
    minus: minus2,
    reset: reset2,
  } = useCounter(0);
  // 缓存计算结果，当依赖项改变时才重新计算
  const total = useMemo(() => count + count2, [count, count2]);

  /// 2 常见自定义hook使用场景1
  const action = useCallback(async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/255");
    const json = await response.json();
    return json.sprites;
  }, []);
  const { loading, error, data, execute } = useAsync(action);

  /// 3 常见自定义hook使用场景2，详见 ScrollTop 组件

  return (
    <>
      <main className="main">
        <section>
          <h2>Count: {count}</h2>
          <button onClick={add}>+</button>
          <button onClick={minus}>-</button>
          <button onClick={reset}>Reset</button>
          <hr />
          <h2>Count2: {count2}</h2>
          <button onClick={add2}>+</button>
          <button onClick={minus2}>-</button>
          <button onClick={reset2}>Reset</button>
          <hr />
          <h2>TOTAL: {total}</h2>
        </section>
        <section>
          {loading ? (
            <div>LOADING...</div>
          ) : error ? (
            <div>ERROR!</div>
          ) : (
            <pre
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(data, null, 2),
              }}
            />
          )}
        </section>
      </main>
      <ScrollTop />
    </>
  );
}
