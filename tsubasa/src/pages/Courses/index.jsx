import { SidebarTrigger } from "@/components/ui/sidebar";




const Courses = () => {
    return <div className="flex flex-col h-screen grp">
        <div className="flex item-center">
            <SidebarTrigger/>
            <h1 className="text-3xl text-black">Courses</h1>
        </div>
        </div>;
  };
  
  export default Courses;