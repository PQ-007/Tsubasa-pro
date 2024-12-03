import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import routes from "./Routes/routes";
import Sidebarv2 from "./components/Sidebarv2";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

const App = () => {
  return (
    <Router>
        <SidebarProvider>
          <div className="flex">
            <Sidebarv2/>  
            {/* <SidebarTrigger/> */}
            <Routes>
                  {routes.map(({ path, component: Component }, index) => (
                    <Route key={index} path={path} element={<Component />} />
                  ))}
                </Routes>
           
        </div>
        </SidebarProvider>
         
        
        
      
    </Router>
  );
};

export default App;
