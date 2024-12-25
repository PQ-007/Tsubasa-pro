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
        {/* Top Navigation */}
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-2xl font-bold">{course.title}</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="search"
              className="border rounded-full px-4 py-2 text-sm"
            />
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-4.215A2 2 0 0016.76 11H7.24a2 2 0 00-1.835 1.785L4 17h5m6-6a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>

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