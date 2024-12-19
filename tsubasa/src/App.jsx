import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Routes/routes";
import Sidebarv2 from "./components/Sidebarv2";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

const App = () => {
  return (
    <Router>
      <SidebarProvider>
        <div className="flex h-screen w-screen">
    
          <Sidebarv2 className="w-64 bg-gray-800 text-white" />

          
          <div className="flex-grow">
         

            {/* Main Content Area */}
            <div className="h-full w-full">
              
            
              <Routes>
                {routes.map(({ path, component: Component }, index) => (
                  <Route key={index} path={path} element={<Component/>} />
                ))}
                {/* Fallback Route */}
                <Route path="*" element={<div>404 - Page Not Found</div>} />
              </Routes>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </Router>
  );
};

export default App;
