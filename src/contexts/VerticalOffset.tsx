import { useObservable } from '@app/utils';
import React, { createContext, FC, useContext, useState } from 'react';
import { fromEvent } from 'rxjs';
import { auditTime, map } from 'rxjs/operators';

const VertivalOffsetContext = createContext(0);

export const VerticalOffsetProvider: FC = ({ children }) => {
  const [offset, setOffset] = useState(0);
  useObservable(
    fromEvent(window, 'scroll').pipe(
      auditTime(200),
      map(() => window.pageYOffset),
    ),
    setOffset,
  );

  return <VertivalOffsetContext.Provider value={offset}>{children}</VertivalOffsetContext.Provider>;
};

export const useVerticalOffset = () => useContext(VertivalOffsetContext);
