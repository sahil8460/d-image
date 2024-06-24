'use client';
import { TimeContext } from '@/context/TimeContext';
import React, { useContext } from 'react';
import { TimePicker } from 'react-ios-time-picker';

const  TimeInput = () => {
   const { time, setTime } = useContext(TimeContext);

   const onChange = (timeValue) => {
      setTime(timeValue);
   }

   if(typeof document === 'undefined'){
    return null;
   }

   return (
      <div>
        <TimePicker placeHolder="Select Duration" onChange={onChange} value={time} />
      </div>
   );
}

export default TimeInput;