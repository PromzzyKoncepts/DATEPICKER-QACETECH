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
  // Function to set predefined date ranges
  const selectRange = (days, isFuture = false) => {
    const now = new Date();
    const targetDate = new Date();
    targetDate.setDate(now.getDate() + (isFuture ? days : -days)); 

    setStartDate(isFuture ? now : targetDate);
    setEndDate(isFuture ? targetDate : now);
  };


  return (

    <div className="flex flex-col items-c enter justify-cent er h-screen bg-[#eaeaea]">
      <div className=" max-w-[50vw]  m-auto ">

      <div className="  focus:outline-0 focus:border-0  border-0 outline-0">
        <DatePicker
        arrow={false}
          selectsRange
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={handleChange}
          monthsShown={2}
          shouldCloseOnSelect={false} 
          open={open}
          fixedHeight
          placeholderText="Select date"
          popperClassName=""
        calendarClassName="  !text-gray-900"
        className=" text-left bg-white shadow-md text-gray-900 px-4 py-2 rounded-lg outline-none focus:ring-1 focus:ring-slate-200"
        />
      </div>

      {/* These are shortcut Buttons */}
      <div className="bg-white flex gap-4 text-sm p-5 text-gray-500 rounded-b-lg">
        <button onClick={() => selectRange(7, false)} className="px-4 py-2 border rounded-xl hover:text-gray-700 hover:bg-slate-100">7 days</button>
        <button onClick={() => selectRange(15, true)} className="px-4 py-2 border rounded-xl hover:text-gray-700 hover:bg-slate-100">15 days</button>
        <button onClick={() => selectRange(30, true)} className="px-4 py-2 border rounded-xl hover:text-gray-700 hover:bg-slate-100">30 days</button>
        <button onClick={() => selectRange(31, true)} className="px-4 py-2 border rounded-xl hover:text-gray-700 hover:bg-slate-100">1 month</button>
        <button onClick={() => selectRange(90, true)} className="px-4 py-2 border rounded-xl hover:text-gray-700 hover:bg-slate-100">3 months</button>
      </div>
      </div>
      
      
    </div>
  );
}
