import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import FilterableCards from "./cardsData.jsx";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="flex flex-col h-screen">

      <div className="flex-grow">
        <FilterableCards onCourseClick={handleCourseClick} />
      </div>
    </div>
  );
};

export default Courses;