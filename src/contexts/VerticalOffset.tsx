import { useObservable } from '@app/utils';
import React, { createContext, FC, useContext, useState } from 'react';
import { EMPTY, fromEvent } from 'rxjs';
import { auditTime, map } from 'rxjs/operators';

const VertivalOffsetContext = createContext(0);

export const VerticalOffsetProvider: FC = ({ children }) => {
  const [offset, setOffset] = useState(0);
  useObservable(
    (typeof window !== 'undefined' ? fromEvent(window, 'scroll') : EMPTY).pipe(
      auditTime(200),
      map(() => window.pageYOffset),
    ),
    setOffset,
  );

  return <VertivalOffsetContext.Provider value={offset}>{children}</VertivalOffsetContext.Provider>;
};

export const useVerticalOffset = () => useContext(VertivalOffsetContext);
