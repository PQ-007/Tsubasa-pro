import MyCourses from "@/pages/MyCourses";
import Dashboard from "@/pages/Dashboard";
import Courses from "@/pages/Courses";
import Settings from "@/pages/Settings";
import { MdOutlineDashboard, MdOutlineSettings } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { PiLightbulbFilament } from "react-icons/pi";
const routes = [
  { path: "/", component: Dashboard, icon: MdOutlineDashboard, name: "Dashboard" },
  { path: "/courses", component: Courses, icon: LuGraduationCap, name: "Courses"},
  { path: "/my-courses", component: MyCourses, icon: PiLightbulbFilament, name:"MyCourses"},
  { path: "/settings", component: Settings, icon: MdOutlineSettings, name: "Settings"},
];

export default routes;
