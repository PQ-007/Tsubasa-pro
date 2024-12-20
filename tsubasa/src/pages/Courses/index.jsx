// eslint-disable-next-line no-unused-vars
import React from "react";

const courses = [
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum mit sore de pas",
    lessons: 12,
    quizzes: 7,
    instructor: "Shams Tabrez",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum mit sore de para madrid",
    lessons: 12,
    quizzes: 7,
    instructor: "Shams Tabrez",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum mit sore de pas",
    lessons: 12,
    quizzes: 7,
    instructor: "Shams Tabrez",
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem Ipsum mit sore de pas",
    lessons: 12,
    quizzes: 7,
    instructor: "Shams Tabrez",
  },
  {
    title: "Lorem Ipsum para",
    description: "Lorem Ipsum para sore de pas hala Madrid",
    lessons: 5,
    quizzes: 4,
    instructor: "Shams Tabrez",
  },
  {
    title: "Lorem Ipsum para",
    description: "Lorem Ipsum para sore de pas hala Madrid",
    lessons: 5,
    quizzes: 4,
    instructor: "Shams Tabrez",
  },
  {
    title: "Fundamental to IoT",
    description: "Lorem Ipsum para sore de pas hala Madrid",
    lessons: 5,
    quizzes: 4,
    instructor: "Shams Tabrez",
  },
];

const CourseCatalog = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Course Catalog</h1>
      <div className="flex justify-center space-x-4 mb-6">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          All
        </button>
        <button className="bg-gray-200 py-2 px-4 rounded">Lorem Ipsum</button>
        <button className="bg-gray-200 py-2 px-4 rounded">Hala de</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-40 bg-gray-200 rounded-lg mb-4">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/path/to/image-placeholder.jpg" // Replace with image path
                alt={course.title}
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <p className="text-sm text-gray-500 mb-2">
              {course.lessons} lessons • {course.quizzes} quizzes
            </p>
            <p className="text-sm text-gray-500">By {course.instructor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;
