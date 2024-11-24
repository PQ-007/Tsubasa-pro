import MyCourses from "@/pages/MyCourses";
import Dashboard from "@/pages/Dashboard";
import Courses from "@/pages/Courses";
import Settings from "@/pages/Settings";
import { MdOutlineDashboard, MdOutlineSettings } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { PiLightbulbFilament } from "react-icons/pi";
const routes = [
  { path: "/", component: Dashboard, icon: MdOutlineDashboard },
  { path: "/courses", component: Courses, icon: LuGraduationCap },
  { path: "/my-courses", component: MyCourses, icon: PiLightbulbFilament},
  { path: "/settings", component: Settings, icon: MdOutlineSettings },
];

export default routes;
