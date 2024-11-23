import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import MyCourses from "./pages/MyCourses";
import Sidebar from "./components/Sidebar";
import { Button } from "@/components/ui/button"
const App = () => {
  return (
    <Router>

      <div className="flex">
        <Sidebar/>
  
        <div className="flex-1 p-4">
          <Routes>
            
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
};

export default App;
