import { RefObject, useEffect } from "react";

export function useOnClickOutside(ref: RefObject<HTMLDivElement>, handler?: () => void, isOpen?: boolean) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const mouseEvent: MouseEvent = event as MouseEvent;
      const isModalWindowClick = ref.current?.contains(event.target as HTMLElement);
      const isScrollBarClick =
        (window.scrollbars?.visible !== undefined ? window.scrollbars.visible : true) &&
        mouseEvent.clientX > document.documentElement.clientWidth - 20;

      if (!ref.current || isModalWindowClick || isScrollBarClick) {
        return;
      }

      handler && handler();
    };

    const isUseEventListener: boolean = isOpen !== undefined ? isOpen : true;
    if (isUseEventListener) {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }

    return () => {
      if (isUseEventListener) {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      }
    };
  }, [ref, handler, isOpen]);
}
