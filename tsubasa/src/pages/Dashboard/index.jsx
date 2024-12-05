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
        <h1 className="text-[#141a2e] font-gilroy text-3xl bg-yellow-300">Dashboard</h1>
      </div>
      
      <div className="flex flex-grow ">
        <div className="flex flex-col basis-11/12 p-4">
          {/* Overview section */}
          <div className="bg-red-800 flex-grow basis-1/3 mb-4">
          <h2>Overview</h2>
          </div>

          {/* My Courses section */}
          <div className="bg-green-600 flex-grow mb-4">my-courses</div>
        </div>
        
        <div className="flex flex-col basis-1/4 p-4">
          {/* Calendar section */}
          <div className="mb-4 basis-1/4">
            
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border-black border shadow"
            />
          </div>
          
          {/* Flashcard section */}
          <div className="bg-black flex-grow mb-4">flashcard</div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
