import { NavLink } from "react-router-dom";

import { PiBookOpenDuotone } from "react-icons/pi";
import React from "react";
import routes from "@/Routes/routes";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  useSidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

export function Sidebarv2() {
  const { open } = useSidebar();
  return (
    
    <div className="flex flex-col items-center ">
      <Sidebar collapsible="icon" className=" text-white ">
        
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                <div className="flex flex-col items-center w-126px">
                  <div className="flex flex-col items-center w-[80px]">
                    <PiBookOpenDuotone size={80} />
                    <h1 className="text-2xl">Tsubasa</h1>
                  </div>
                  <nav className="py-8">
                    <ul className="flex flex-col items-center gap-0">
                      {routes.map(({ path, icon: Icon, name}, index) => (
                        
                        <li
                          key={index}
                          className={index == 0 ? "pb-12" : ""}
                        > 
                        
                          <NavLink to={path} className="px-5 group/item">
                            {({ isActive }) => (
                              
                              <SidebarMenuButton
                                size="icon"
                                tooltip={name}
                                className={`flex items-center rounded-[8px] text-lg hover:${
                                  open ? "justify-start w-[150px] h-[70px] " : "w-[74px] h-[70px]"
                                } ${
                                  isActive ? "bg-[#2d9cdb]" : "bg-transparent"
                                }`}
                              >
                                <div
                                  className={`flex items-center justify-center ${open ? '' : 'w-full'} 
                                  }`}
                                >
                                  <Icon className="w-8 h-8" /> 
                                </div>
                                {open ? name : ""}
                              </SidebarMenuButton>
                            )}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail/>
      </Sidebar>
    </div>
  );
}

export default Sidebarv2;
