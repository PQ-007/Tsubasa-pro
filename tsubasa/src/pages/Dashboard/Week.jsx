import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const Week = () => {
  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const getCurrentWeekDates = () => {
    const today = new Date();
    const startOfWeek = new Date(
      today.setDate(today.getDate() - today.getDay() + 1)
    );
    const dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date;
    });
    return dates;
  };

  const [currentWeek, setCurrentWeek] = useState(getCurrentWeekDates);

  const changeWeek = (direction) => {
    setCurrentWeek((prevWeek) => {
      const newStartDate = new Date(prevWeek[0]);
      newStartDate.setDate(newStartDate.getDate() + direction * 7);
      return Array.from({ length: 7 }, (_, i) => {
        const date = new Date(newStartDate);
        date.setDate(newStartDate.getDate() + i);
        return date;
      });
    });
  };

  const today = new Date();

  return (
    <div className="py-2 font-sans ">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          {currentWeek[0].toLocaleString("default", { month: "long" }).slice(0,3)}{" "}
          {currentWeek[0].getFullYear()}
        </h2>
        <div className="flex items-center space-x-2">
          <Button 
            className="p-1 rounded-md border border-gray-300"
            onClick={() => changeWeek(-1)}
          >
            <ChevronLeft/>
          </Button>
          <Button
            className="p-1 rounded-md border border-gray-300"
            onClick={() => changeWeek(1)}
          >
            <ChevronRight/>
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="mt-2 grid grid-rows-2 grid-cols-7 gap-3.5 text-center">
        {/* Weekdays */}
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="font-medium text-gray-500 p-1.5"
          >
            {day}
          </div>
        ))}

        {/* Dates */}
        {currentWeek.map((date, index) => (
          <button
            key={index}
            className={`rounded-full  cursor-pointer   ${
              date.toDateString() === today.toDateString()
                ? "bg-gray-800 text-white "
                : date < today
                ? "text-gray-400"
                : "text-gray-700"
                
            }`}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Week;
