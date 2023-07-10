"use client";
import { useState, useEffect } from "react";

export const runtime = "edge";

// 获取横向，纵向滚动条位置
const getPosition = () => {
  return {
    x: window.scrollX,
    y: window.scrollY,
  };
};
const useScroll = () => {
  // 定一个 position 这个 state 保存滚动条位置
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = () => {
      setPosition(getPosition());
    };

    handler();
    // 监听 scroll 事件，更新滚动条位置
    document.addEventListener("scroll", handler);
    return () => {
      // 组件销毁时，取消事件监听
      document.removeEventListener("scroll", handler);
    };
  }, []);
  return position;
};

export default useScroll;
