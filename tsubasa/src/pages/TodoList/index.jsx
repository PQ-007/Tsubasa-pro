import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, ArrowLeft, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const TodoListPage = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([
    { id: 1, text: "Complete React Basics", completed: false },
    { id: 2, text: "Review JavaScript Arrays", completed: true },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // Add new todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Date.now(), text: newTodo.trim(), completed: false },
    ]);
    setNewTodo("");
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  // Start editing todo
  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // Save edited todo
  const saveEdit = (id) => {
    if (!editText.trim()) return;

    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, text: editText.trim() } : todo
      )
    );
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={() => navigate("/my-courses")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">To-Do List</h1>
      </div>

      {/* Add Todo Form */}
      <form onSubmit={handleAddTodo} className="mb-6">
        <div className="flex gap-2">
          <Input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow"
          />
          <Button type="submit">
            <Plus className="h-4 w-4 mr-2" /> Add Task
          </Button>
        </div>
      </form>

      <Separator className="my-4" />

      {/* Todo List */}
      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3 flex-grow">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleTodo(todo.id)}
                className={todo.completed ? "text-green-500" : "text-gray-400"}
              >
                <Check className="h-4 w-4" />
              </Button>

              {editingId === todo.id ? (
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={() => saveEdit(todo.id)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit(todo.id)}
                  autoFocus
                />
              ) : (
                <span
                  className={`flex-grow ${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                  onDoubleClick={() => startEdit(todo)}
                >
                  {todo.text}
                </span>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteTodo(todo.id)}
              className="text-gray-400 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoListPage;
