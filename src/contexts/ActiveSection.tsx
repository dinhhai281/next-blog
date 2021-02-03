import React, { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react';

const ActiveSectionContext = createContext<[string | null, Dispatch<SetStateAction<string | null>>]>([null, _ => _]);

export const ActiveSectionProvider: FC = ({ children }) => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  return <ActiveSectionContext.Provider value={[activeKey, setActiveKey]}>{children}</ActiveSectionContext.Provider>;
};

export const useActiveSection = () => useContext(ActiveSectionContext);
