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
      
    </div>
  );
}
