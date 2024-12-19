import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import FilterableCards from "./cardsData.jsx";


const Courses = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center">
        <SidebarTrigger />
        <h1 className="text-[#141a2e] font-gilroy text-3xl">Courses</h1>
      </div>

      <div className="flex-grow">
        <FilterableCards />
       
      </div>
    </div>
  );
};

export default Courses;