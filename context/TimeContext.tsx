import React, { createContext, useState, useEffect } from 'react';

type TimeData = {
  time: string;
  setTime: any;
};

export const TimeContext = createContext<TimeData>({ time: '', setTime: () => {} });

export const TimeProvider = ({ children }: any) => {
  const [time, setTime] = useState<string>('00:25');

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  );
};