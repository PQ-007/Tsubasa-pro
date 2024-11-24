import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Button } from "@/components/ui/button"
import routes from "./Routes/routes";

const App = () => {
  return (
    <Router>

      <div className="flex">
        <Sidebar/>
  
        <div className="flex-1 p-4">
    
          <Routes>
            {routes.map(({ path, component: Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Routes>
     
        </div>
        
      </div>
    </Router>
  );
};

export default App;
