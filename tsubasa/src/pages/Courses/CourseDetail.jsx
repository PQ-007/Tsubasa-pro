import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cardsData } from "./cardsData";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const course = cardsData.find(course => course.id === parseInt(courseId));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-64 border-r bg-white">
        <div className="p-4">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-gray-600 mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            back
          </button>
          
          <div className="text-sm text-gray-600 mb-4">LESSONS</div>
          
          {/* Lesson List */}
          <div className="space-y-2">
            {Array.from({length: course.lessons}, (_, i) => (
              <div key={i} className={i === 0 ? "bg-blue-500 text-white p-3 rounded" : "p-3 hover:bg-gray-100 rounded cursor-pointer"}>
                Lesson {i + 1}
              </div>
            ))}
            {Array.from({length: course.quizzes}, (_, i) => (
              <div key={`quiz-${i}`} className="p-3 hover:bg-gray-100 rounded cursor-pointer text-orange-500">
                Quiz {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">

        {/* Course Content */}
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Author</p>
                <p className="font-medium">{course.author}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-medium">{course.category}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Total Lessons</p>
                <p className="font-medium">{course.lessons}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Total Quizzes</p>
                <p className="font-medium">{course.quizzes}</p>
              </div>
            </div>
          </div>

          {/* Course Overview */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Course Overview</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Course Structure:</h4>
                  <ul className="list-disc list-inside text-gray-600 ml-4">
                    <li>{course.lessons} comprehensive lessons</li>
                    <li>{course.quizzes} assessment quizzes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">What You'll Learn:</h4>
                  <p className="text-gray-600">{course.description}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Instructor:</h4>
                  <p className="text-gray-600">{course.author}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button className="px-4 py-2 bg-gray-200 rounded-lg flex items-center">
              <span>← PREVIOUS</span>
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg flex items-center">
              <span>NEXT →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;