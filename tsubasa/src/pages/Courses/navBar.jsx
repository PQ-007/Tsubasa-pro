import React from 'react';

const navBar = () => {
  return (
    <div className="p-4">
      {/* Top bar */}
      <div className="border-b-2 border-purple-400">
        {/* Title Section */}
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-2xl font-bold">Course Catalog</h1>
            <p className="text-gray-500">My Courses / catalog</p>
          </div>
          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="search"
                className="border rounded-full px-4 py-2 text-sm focus:outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 absolute right-3 top-2 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M16.65 10.65a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"
                />
              </svg>
            </div>
            {/* Notification Icon */}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-4.215a1 1 0 0 0-.948-.785H8.705a1 1 0 0 0-.948.785L6 17h5m4-4a4 4 0 1 0-8 0m8 0v1a4 4 0 0 1-8 0v-1m8-8a4 4 0 1 1-8 0"
                />
              </svg>
            </button>
            {/* Settings Icon */}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.25 12a7.25 7.25 0 0 0-14.5 0 7.25 7.25 0 0 0 14.5 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-4">
        <p className="text-gray-500 italic">No courses available</p>
      </div>
    </div>
  );
};

export default navBar;
