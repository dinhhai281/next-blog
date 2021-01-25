import { RefObject, useEffect, useState } from 'react';

export const useAffix = (options?: IntersectionObserverInit) => <T extends HTMLElement>(target: RefObject<T>) => {
  const [isFixed, setIsFixed] = useState<boolean>(true);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      });
    }, options);

    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return isFixed;
};
