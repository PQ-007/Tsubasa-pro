import { NavLink } from 'react-router-dom';

import { PiBookOpenDuotone, PiGraduationCapDuotone } from "react-icons/pi";


import routes from '@/Routes/routes';
import { Button } from './ui/button';




const Sidebar = () => {

  return (
    <div className="flex flex-col items-center  w-[126px] h-screen bg-[#141A2F] text-white">
      <div className='flex flex-col items-center w-[80px]'>
        <PiBookOpenDuotone size={80}/>
        <h1 className='text-2xl'>Tsubasa</h1>
      </div>
      <nav className='py-8'>
        <ul className="flex flex-col items-center gap-0">
          {routes.map(({ path, icon : Icon }, index) => (
            <li key={index} className={(index==0) ? 'pb-12 pt-9' : ''}>
              <NavLink to={path} >
                {({ isActive }) => (
                  <Button variant='navbar_icon'
                    className={`w-[78px] h-[70px] rounded-[8px] ${
                      isActive ? "bg-[#2d9cdb]" : "bg-transparent"
                    }`}
                  >
                    {<Icon/>}
                  </Button>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
        
        

      </div>

  )
}

export default Sidebar