"use client";

import { useCallback } from "react";
import useScroll from "../useScroll";

export default function ScrollTop() {
  const { y } = useScroll();

  const goTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // 当滚动条位置纵向超过 300 时，显示返回顶部按钮
  if (y > 300) {
    return (
      <button
        onClick={goTop}
        style={{ position: "fixed", right: "10px", bottom: "10px" }}
      >
        Back to Top
      </button>
    );
  }
  // 否则不 render 任何 UI
  return null;
}
