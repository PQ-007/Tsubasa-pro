import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import routes, { hiddenRoutes } from "./Routes/routes";
import Sidebarv2 from "./components/Sidebarv2";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import * as React from "react";
import { Bell, Settings, Search } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "@/components/ui/input";
import CourseDetail from "./pages/Courses/CourseDetail";

const App = () => {
  const [title, setTitle] = React.useState("Dashboard");
  const location = useLocation();
  const [showNotifications, setShowNotifications] = React.useState(false);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  React.useEffect(() => {
    const matchingRoute = [...routes, ...hiddenRoutes].find(
      (route) => route.path === location.pathname
    );

    if (matchingRoute) {
      setTitle(matchingRoute.name || "Dashboard");
    } else {
      setTitle("404 - Page Not Found");
    }
  }, [location]);

  return (
    <div className="flex h-screen w-screen pr-4">
      <SidebarProvider>
        <Sidebarv2 className="w-64 bg-gray-800 text-white" />
        <div className="flex-grow">
          <div className="h-full w-full">
            {/* Header */}
            <div className="flex items-center justify-between border-b">
              <div className="flex items-center">
                <SidebarTrigger />
                <h1 className="text-[#141a2e] font-gilroy text-3xl ">{title}</h1>
              </div>
              <div className="flex items-center justify-between  py-2">
              
                <div className="relative w-[200px]">
                  <Input
                    type="text"
                    placeholder="search"
                    className="pl-10"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>

                <div className="flex items-center">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleNotificationClick}
                    >
                      <Bell className="h-6 w-6" />
                    </Button>
                    {showNotifications && (
                      <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border p-4 z-50">
                        <h3 className="font-medium mb-2">Notifications</h3>
                        <div className="space-y-2">
                          <p className="text-sm">
                            New lesson available in React
                          </p>
                          <p className="text-sm">
                            Complete your JavaScript quiz
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
            <Routes>
              {/* Visible routes */}
              {routes.map(({ path, component: Component, name }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))}

              {/* Hidden routes */}
              {hiddenRoutes.map(({ path, component: Component }, index) => (
                <Route
                  key={`hidden-${index}`}
                  path={path}
                  element={<Component />}
                />
              ))}

              {/* Fallback Route */}
              <Route
                path="*"
                element={
                  <div className="text-center text-red-500 text-2xl">
                    404 - Page Not Found
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
