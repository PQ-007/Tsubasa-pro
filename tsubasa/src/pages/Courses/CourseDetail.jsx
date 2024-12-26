import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { cardsData } from "./cardsData";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('lesson-1');
  const [showAnswers, setShowAnswers] = useState({});
  
  const currentCourseId = parseInt(courseId);
  const course = cardsData.find(course => course.id === currentCourseId);

  // Get previous and next course IDs
  const previousCourseId = cardsData.find(c => c.id === currentCourseId - 1)?.id;
  const nextCourseId = cardsData.find(c => c.id === currentCourseId + 1)?.id;

  // Handle navigation between courses
  const handleCourseNavigation = (direction) => {
    if (direction === 'next' && nextCourseId) {
      navigate(`/courses/${nextCourseId}`);
      // Keep the same lesson/quiz tab when changing courses
      setActiveItem(activeItem);
    } else if (direction === 'prev' && previousCourseId) {
      navigate(`/courses/${previousCourseId}`);
      // Keep the same lesson/quiz tab when changing courses
      setActiveItem(activeItem);
    }
  };

  // Handle lesson/quiz tab clicks
  const handleItemClick = (type, number) => {
    setActiveItem(`${type}-${number}`);
  };

  // Toggle answer visibility for a specific question
  const toggleAnswer = (questionId) => {
    setShowAnswers(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  // Render quiz content
  const renderQuizContent = (quiz) => {
    return (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold mb-6">{quiz.title}</h2>
        {quiz.questions.map((question) => (
          <div key={question.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-3">
                {question.id}. {question.question}
              </h3>
              <div className="space-y-2">
                {question.options.map((option, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      showAnswers[question.id] && question.correctAnswer === index
                        ? 'bg-green-100 border-green-500'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    {['a', 'b', 'c', 'd'][index]}) {option}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => toggleAnswer(question.id)}
                className="px-4 py-2 text-sm rounded-lg transition-colors
                  bg-blue-500 text-white hover:bg-blue-600"
              >
                {showAnswers[question.id] ? 'Хариуг нуух' : 'Хариуг харах'}
              </button>
              
              {showAnswers[question.id] && (
                <div className="text-green-600">
                  <span className="font-semibold">Тайлбар: </span>
                  {question.explanation}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Add this function to render markdown content
  const renderMarkdown = (content) => {
    return (
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown
          children={content}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />
      </div>
    )
  };

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-64 border-r bg-white">
        <div className="p-4">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-gray-600 mb-6 hover:text-blue-600 transition-colors"
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
              <button
                key={`lesson-${i + 1}`}
                onClick={() => handleItemClick('lesson', i + 1)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  activeItem === `lesson-${i + 1}`
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                Lesson {i + 1}
              </button>
            ))}
            
            {Array.from({length: course.quizzes}, (_, i) => (
              <button
                key={`quiz-${i + 1}`}
                onClick={() => handleItemClick('quiz', i + 1)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  activeItem === `quiz-${i + 1}`
                    ? 'bg-orange-500 text-white'
                    : 'hover:bg-orange-50 text-orange-500'
                }`}
              >
                Quiz {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="max-w-4xl mx-auto p-6">
          {activeItem.startsWith('quiz') ? (
            // Quiz Content
            activeItem === 'quiz-1' && course.quiz1 ? (
              renderQuizContent(course.quiz1)
            ) : activeItem === 'quiz-2' && course.quiz2 ? (
              renderQuizContent(course.quiz2)
            ) : (
              <div>Quiz content not available</div>
            )
          ) : (
            // Lesson Content
            <>
              {/* Video Section */}
              <div className="mb-8">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src={course.videoUrl}
                    title={course.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Course Content */}
              <div className="space-y-6">
                {/* Brief Description Card */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">{course.title}</h2>
                  <p className="text-gray-600">{course.description}</p>
                </div>

                {/* Detailed Content Card */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  {renderMarkdown(course.detailedContent)}
                </div>
              </div>
            </>
          )}

          {/* Navigation Buttons - Only for Course Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => handleCourseNavigation('prev')}
              disabled={!previousCourseId}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${
                !previousCourseId
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              PREVIOUS COURSE
            </button>

            <button
              onClick={() => handleCourseNavigation('next')}
              disabled={!nextCourseId}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${
                !nextCourseId
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              NEXT COURSE
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Course Progress Indicator */}
          <div className="mt-4 text-center text-sm text-gray-600">
            <div>
              Course {currentCourseId} of {cardsData.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;