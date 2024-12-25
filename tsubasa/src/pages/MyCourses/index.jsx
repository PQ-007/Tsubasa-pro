import { Bell, Search, Settings, MoreVertical, Check, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  // State management
  const [date, setDate] = useState(new Date());
  const [showNotifications, setShowNotifications] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete React Basics", completed: false },
    { id: 2, text: "Review JavaScript Arrays", completed: true },
  ]);
  const [newTodo, setNewTodo] = useState("");

  // Mock enrolled courses data with detailed information
  const [enrolledCourses] = useState([
    {
      id: 1,
      title: "React Fundamentals",
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      lastAccessed: "2024-03-10",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      progress: 45,
      totalLessons: 15,
      completedLessons: 7,
      lastAccessed: "2024-03-08",
    },
    {
      id: 3,
      title: "UI/UX Design Basics",
      progress: 90,
      totalLessons: 10,
      completedLessons: 9,
      lastAccessed: "2024-03-12",
    },
  ]);

  // Calculate overall progress
  const overallProgress = Math.round(
    enrolledCourses.reduce((acc, course) => acc + course.progress, 0) /
      enrolledCourses.length
  );

  // Event Handlers
  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const navigate = useNavigate();

  // Update the navigation handlers
  const handleTodoClick = () => {
    navigate("/todo-list");
  };

  const handleFlashcardsClick = () => {
    navigate("/flashcards");
  };

  return (
    <div className="h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <img
          src="https://images-platform.99static.com//KlBLMX8dQrcq6hZGnxf5HSnG29I=/8x543:525x1060/fit-in/500x500/99designs-contests-attachments/123/123360/attachment_123360235"
          alt="Logo"
          className="w-[50px] h-[50px] object-cover rounded-full"
        />

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Input
              type="text"
              placeholder="Search courses..."
              className="w-[200px] lg:w-[300px] pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => {
              /* Handle mobile search */
            }}
          >
            <Search className="h-6 w-6" />
          </Button>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNotificationClick}
            >
              <Bell className="h-6 w-6" />
            </Button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border p-4 z-50">
                <h3 className="font-medium mb-2">Notifications</h3>
                <div className="space-y-2">
                  <p className="text-sm">New lesson available in React</p>
                  <p className="text-sm">Complete your JavaScript quiz</p>
                </div>
              </div>
            )}
          </div>

          <Button variant="ghost" size="icon">
            <Settings className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Main Content and Sidebar Layout */}
      <div className="flex flex-grow gap-4">
        <div className="flex flex-col basis-3/4 p-4">
          {/* Progress Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Your Progress</h2>
            <div className="h-5 w-full bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-600 rounded-full transition-all"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Overall Completion: {overallProgress}%
            </p>
            <p className="mt-1 text-sm text-gray-600">
              You&apos;re making great progress! Complete 2 more lessons to
              reach your weekly goal.
            </p>
          </div>

          {/* Enrolled Courses */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Enrolled Courses</h2>
            <div className="grid gap-8">
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">{course.title}</h3>
                      <p className="text-sm text-gray-600">
                        Last accessed: {course.lastAccessed}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 relative">
                        <svg className="w-12 h-12 transform -rotate-90">
                          <circle
                            className="text-gray-200"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="transparent"
                            r="20"
                            cx="24"
                            cy="24"
                          />
                          <circle
                            className="text-green-500"
                            strokeWidth="2"
                            strokeDasharray={125.6}
                            strokeDashoffset={
                              125.6 * (1 - course.progress / 100)
                            }
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="transparent"
                            r="20"
                            cx="24"
                            cy="24"
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-xs">
                          {course.progress}%
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>
                          {course.completedLessons}/{course.totalLessons}{" "}
                          lessons
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-[150px] h-[50px]">Browse Courses</Button>
        </div>

        <div className="flex flex-col basis-1/4 p-4 ">
          {/* Calendar */}
          <div className="border rounded-lg p-4 bg-white mb-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full"
              classNames={{
                months:
                  "w-full flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "w-full space-y-4",
                table: "w-full border-collapse space-y-1",
                head_row: "flex w-full",
                head_cell:
                  "w-full text-muted-foreground rounded-md font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: "relative w-full h-9 p-0 text-center text-sm focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 mx-auto font-normal aria-selected:opacity-100",
                day_selected:
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                day_today: "bg-accent text-accent-foreground",
                day_outside: "text-muted-foreground opacity-50",
                day_disabled: "text-muted-foreground opacity-50",
                day_hidden: "invisible",
                nav: "space-x-1 flex items-center justify-between px-1",
                nav_button:
                  "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                caption:
                  "flex justify-center pt-1 relative items-center text-sm font-medium",
              }}
            />
          </div>

          {/* To-do List Section */}
          <div className="border rounded-lg p-4 bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">To-Do List</h3>
              <Button variant="ghost" size="sm" onClick={handleTodoClick}>
                View All
              </Button>
            </div>
            <form onSubmit={handleAddTodo} className="mb-2">
              <Input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add new task..."
                className="text-sm"
              />
            </form>
            <div className="space-y-2">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className={`w-4 h-4 border rounded ${
                        todo.completed ? "bg-green-500 border-green-500" : ""
                      }`}
                    >
                      {todo.completed && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </button>
                    <span
                      className={
                        todo.completed ? "line-through text-gray-400" : ""
                      }
                    >
                      {todo.text}
                    </span>
                  </div>
                  <button onClick={() => deleteTodo(todo.id)}>
                    <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Flashcard Section */}
          <div className="border rounded-lg p-4 bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Flashcards</h3>
              <Button variant="ghost" size="sm" onClick={handleFlashcardsClick}>
                View All
              </Button>
            </div>
            <p className="text-sm text-gray-600">Review your cards</p>
            <div className="mt-4">
              <Button
                className="w-full"
                variant="outline"
                onClick={handleFlashcardsClick}
              >
                Start Review Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
