import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import FilterableCards from "./cardsData.jsx";


const Courses = () => {
  return (
    <div className="flex flex-col h-screen">

      <div className="flex-grow">
        <FilterableCards />
       
      </div>
    </div>
  );
};

export default Courses;
