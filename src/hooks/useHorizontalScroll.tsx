import { useRef, useEffect, Ref, RefObject } from "react";

export function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement>();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          top: el.scrollTop + e.deltaY,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef as RefObject<HTMLDivElement>;
}
