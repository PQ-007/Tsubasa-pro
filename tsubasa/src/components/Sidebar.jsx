import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { LayoutDashboard } from 'lucide-react';

 


const Sidebar = () => {
  return (
    <div className="flex flex-col items-center  w-[126px] h-screen bg-gray-800 text-white">
      <div  className='flex flex-col items-center px-3 py-5 gap-12'>
        <div className='flex flex-col items-center'>
          <BookOpen size={80} />
          <h1 className='text-3xl'>Tsubasa</h1>
        </div>
        <div className='flex flex-col items-center gap-[100px]'>
          <Link to="/" className="block px-4 py-2 ">
            <Button variant="navbar_icon" className= "w-[78px] h-[70px] bg-[#2d9cdb] text-2xl ">
              <LayoutDashboard />
            </Button>
          </Link>
          <div>Workspace</div>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <nav className='flex flex-col items-center gap-0'>
            <ul className="space-y-4">
              <li>
                <Link to="/courses" className="block px-4 py-2 ">
                  <Button variant="navbar_icon" className="w-[78px] h-[70px] bg-[#2d9cdb] text-2xl ">
                    <LayoutDashboard />
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/my-courses" className="block px-4 py-2">
                  <Button variant="navbar_icon" className="w-[78px] h-[70px] bg-[#2d9cdb] text-2xl ">
                    <LayoutDashboard />
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/settings" className="block px-4 py-2">
                  <Button variant="navbar_icon" className="w-[78px] h-[70px] bg-[#2d9cdb] text-2xl ">
                    <LayoutDashboard />
                  </Button>
                </Link>
              </li>
            </ul>
        </nav>
        </div>
      </div>

    </div>
  )
}

export default Sidebar