import { useState, RefObject, useEffect } from 'react';

const useIntersection = (isSticky: boolean, ref: RefObject<HTMLDivElement>): boolean => {
  const [isStickyNow, setStickyNow] = useState<boolean>(false);

  useEffect(() => {
    if (!isSticky) {
      return;
    }

    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]: IntersectionObserverEntry[]) => {
        setStickyNow(!isIntersecting);
      },
      { threshold: [0] } // Rate of the target's visibility the callback should be executed
    );

    cachedRef && observer.observe(cachedRef);

    // unmount
    return () => {
      cachedRef && observer.unobserve(cachedRef);
    };
  }, [isSticky]);

  return isStickyNow;
};

export default useIntersection;
