"use client";
import * as React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Calendar } from "@/components/ui/calendar"; 

const Dashboard = () => {
  const [date, setDate] = React.useState(null); 

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center">
        <SidebarTrigger />
        <h1 className="text-[#141a2e] font-gilroy text-3xl">Dashboard</h1>
      </div>
      
      <div className="flex flex-grow ">
        <div className="flex flex-col basis-11/12 p-2">
          {/* Overview section */}
          <div className="bg-red-800 flex-grow basis-1/3 mb-2">
          <h2>Overview</h2>
          </div>

          {/* My Courses section */}
          <div className="bg-green-600 flex-grow mb-2">my-courses</div>
        </div>
        
        <div className="flex flex-col basis-1/4 p-2 pl-0">
          {/* Calendar section */}
          <div className="mb-2 basis-1/4">
          

            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => setDate(selectedDate)}
              className="rounded-md border-black border shadow"
            />
          </div>
          
          {/* Flashcard section */}
          <div className="bg-black flex-grow mb-2">flashcard</div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
