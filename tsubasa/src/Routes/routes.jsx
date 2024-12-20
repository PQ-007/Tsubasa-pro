import TodoListPage from "@/pages/TodoList";
import FlashcardPage from "@/pages/Flashcards";

const routes = [
  // ... existing routes ...
  {
    path: "/todo",
    name: "Todo List",
    component: TodoListPage,
    icon: /* your chosen icon */,
  },
  {
    path: "/flashcards",
    name: "Flashcards",
    component: FlashcardPage,
    // Optional: add an icon if you want it in the sidebar
  },
];

export const hiddenRoutes = [
  // ... existing hidden routes ...
  {
    path: "/todo",
    component: TodoListPage,
  },
];

export default routes;
