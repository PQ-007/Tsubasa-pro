import MyCourses from "@/pages/MyCourses";
import Dashboard from "@/pages/Dashboard";
import Courses from "@/pages/Courses";
import Account from "@/pages/Account";
import TodoListPage from "@/pages/TodoList";
import FlashcardPage from "@/pages/Flashcards";
import CourseDetail from "@/pages/Courses/CourseDetail";
import { MdOutlineDashboard } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { PiLightbulbFilament } from "react-icons/pi";
import { CircleUser } from "lucide-react";
import Settings from "@/pages/Settings";
import login from "@/components/login";
import register from "@/components/register";
// Main routes (shown in sidebar)
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
    path: "/accout",
    component: Account,
    icon: CircleUser,
    name: "Account",
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
  {
    path: "/courses/:courseId",
    component: CourseDetail,
  },
  {
    path: "/settings",
    component: Settings,
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "register",
    component: register,
  },
];

export default routes;
