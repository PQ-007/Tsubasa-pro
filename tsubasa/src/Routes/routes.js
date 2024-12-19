import MyCourses from "@/pages/MyCourses";
import Dashboard from "@/pages/Dashboard";
import Courses from "@/pages/Courses";
import Settings from "@/pages/Settings";
import TodoListPage from "@/pages/TodoList";
import FlashcardPage from "@/pages/Flashcards";
import { MdOutlineDashboard, MdOutlineSettings } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { PiLightbulbFilament } from "react-icons/pi";

const routes = [
  {
    path: "/",
    component: Dashboard,
    icon: MdOutlineDashboard,
    name: "Dashboard",
  },
  {
    path: "/courses",
    component: Courses,
    icon: LuGraduationCap,
    name: "Courses",
  },
  {
    path: "/my-courses",
    component: MyCourses,
    icon: PiLightbulbFilament,
    name: "MyCourses",
  },
  {
    path: "/settings",
    component: Settings,
    icon: MdOutlineSettings,
    name: "Settings",
  },
];

// Hidden routes (not shown in sidebar)
export const hiddenRoutes = [
  {
    path: "/todo-list",
    component: TodoListPage,
  },
  {
    path: "/flashcards",
    component: FlashcardPage,
  },
];

export default routes;
