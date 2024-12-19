import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, ArrowLeft, X, Check, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const TodoListPage = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "Course Tasks",
      tasks: [
        {
          id: 1,
          text: "Complete React tutorial",
          description: "Work through the official React documentation",
          completed: false,
        },
        {
          id: 2,
          text: "Review JavaScript basics",
          description: "Focus on ES6+ features",
          completed: true,
        },
      ],
    },
  ]);
  const [activeList, setActiveList] = useState(null);
  const [newListTitle, setNewListTitle] = useState("");
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [editTaskDescription, setEditTaskDescription] = useState("");

  const handleBack = () => {
    navigate("/my-courses");
  };

  const handleCreateList = () => {
    if (!newListTitle.trim()) return;
    setLists([...lists, { id: Date.now(), title: newListTitle, tasks: [] }]);
    setNewListTitle("");
  };

  const handleDeleteList = (listId) => {
    setLists(lists.filter((list) => list.id !== listId));
    if (activeList?.id === listId) {
      setActiveList(null);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setEditTaskText(task.text);
  };

  const handleUpdateTask = () => {
    if (!editTaskText.trim()) return;
    const updatedLists = lists.map((list) =>
      list.id === activeList.id
        ? {
            ...list,
            tasks: list.tasks.map((task) =>
              task.id === editingTask.id
                ? { ...task, text: editTaskText }
                : task
            ),
          }
        : list
    );
    setLists(updatedLists);
    setEditingTask(null);
    setEditTaskText("");
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    setIsLoading(true);
    try {
      const newTaskObj = {
        id: Date.now(),
        text: newTask,
        description: newTaskDescription,
        completed: false,
      };

      const updatedLists = lists.map((list) =>
        list.id === activeList.id
          ? {
              ...list,
              tasks: [...list.tasks, newTaskObj],
            }
          : list
      );

      setLists(updatedLists);
      setNewTask("");
      setNewTaskDescription("");
      setError(null);
    } catch (err) {
      setError("Failed to add task. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTask = (listId, taskId) => {
    const updatedLists = lists.map((list) =>
      list.id === listId
        ? {
            ...list,
            tasks: list.tasks.map((task) =>
              task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
            ),
          }
        : list
    );
    setLists(updatedLists);
  };

  const deleteTask = (listId, taskId) => {
    const updatedLists = lists.map((list) =>
      list.id === listId
        ? {
            ...list,
            tasks: list.tasks.filter((task) => task.id !== taskId),
          }
        : list
    );
    setLists(updatedLists);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        setEditingTask(null);
      }
      if (e.key === "Enter" && e.ctrlKey && activeList) {
        // Focus the new task input
        document.querySelector('input[name="newTask"]')?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [activeList]);

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={() => navigate("/my-courses")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">To-Do Lists</h1>
      </div>

      {!activeList ? (
        <div>
          <div className="mb-6 flex gap-4">
            <Input
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
              placeholder="New list title..."
              className="max-w-xs"
            />
            <Button onClick={handleCreateList}>
              <Plus className="h-4 w-4 mr-2" /> Create List
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lists.map((list) => (
              <div
                key={list.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <div
                    className="flex-1 cursor-pointer"
                    onClick={() => setActiveList(list)}
                  >
                    <h3 className="font-medium">{list.title}</h3>
                    <p className="text-sm text-gray-600">
                      {list.tasks.length} tasks
                    </p>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete List</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this list? This action
                          cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteList(list.id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-medium">{activeList.title}</h2>
            <Button variant="outline" onClick={() => setActiveList(null)}>
              Back to Lists
            </Button>
          </div>

          {editingTask ? (
            <div className="mb-6">
              <Input
                value={editTaskText}
                onChange={(e) => setEditTaskText(e.target.value)}
                className="mb-2"
              />
              <div className="flex gap-2">
                <Button onClick={handleUpdateTask}>Save</Button>
                <Button variant="ghost" onClick={() => setEditingTask(null)}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleAddTask} className="mb-6">
              <div className="flex flex-col gap-2">
                <Input
                  name="newTask"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="New task..."
                  className="max-w-xs"
                />
                <Input
                  value={newTaskDescription}
                  onChange={(e) => setNewTaskDescription(e.target.value)}
                  placeholder="Description (optional)"
                  className="max-w-xs"
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    "Adding..."
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-2" /> Add Task
                    </>
                  )}
                </Button>
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
          )}

          <div className="space-y-4">
            {activeList.tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleTask(activeList.id, task.id)}
                      className={`w-5 h-5 border rounded flex items-center justify-center ${
                        task.completed ? "bg-green-500 border-green-500" : ""
                      }`}
                    >
                      {task.completed && (
                        <Check className="h-4 w-4 text-white" />
                      )}
                    </button>
                    <span
                      className={`${
                        task.completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {task.text}
                    </span>
                  </div>
                  {task.description && (
                    <p className="text-sm text-gray-600 ml-9">
                      {task.description}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditTask(task)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Task</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this task?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => deleteTask(activeList.id, task.id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoListPage;
