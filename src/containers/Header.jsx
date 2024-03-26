import {MenuItem} from "../components";
import {Menus} from "../utils/helper"

const Header = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 flex items-end justify-center w-full h-auto pb-8 lg:pb-0 lg:items-center lg:top-0 lg:h-screen lg:w-32">
      <div className="px-4 py-3 lg:py-12 rounded-full border border-[rgba(255,255,255,0.3)] flex flex-row lg:flex-col items-center justify-center gap-12 duration-200 backdrop-blur-md ">
    {Menus && Menus.map((item, index)=>{
      return (
        <MenuItem key={index} menu={item} index={index}/>
      )
    })}
        
      </div>
    </div>
  );
};

export default Header;
