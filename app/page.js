"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  // here i defined state for start date
  const [startDate, setStartDate] = useState(null);
  // here i defined state for ending date
  const [endDate, setEndDate] = useState(null);
  // here i defined state for leaving the calendar open and not closed
  const [open, setOpen] = useState(true);

  const handleChange = (range) => {
    const [start, end] = range;
    setStartDate(start);
    setEndDate(end);
  };
  const setPresetRange = (days) => {
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - days);
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="">
      <div className="">
        <DatePicker
          selectsRange
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={handleChange}
          monthsShown={2}
          shouldCloseOnSelect={false} 
          onClickOutside={() => setOpen(false)} 
          open={open}
          onInputClick={() => setOpen(true)}
        />
      </div>
      <div className="">
        <button onClick={() => setPresetRange(7)} className="">7 Days</button>
        <button onClick={() => setPresetRange(15)} className="">15 Days</button>
        <button onClick={() => setPresetRange(30)} className="">30 Days</button>
        <button onClick={() => setPresetRange(31)} className="">1 Month</button>
        <button onClick={() => setPresetRange(90)} className="">3 Months</button>
      </div>
    </div>
  );
}
