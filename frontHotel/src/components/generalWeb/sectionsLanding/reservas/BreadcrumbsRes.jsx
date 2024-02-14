import { TbHomeCheck } from "react-icons/tb";
import { SlPeople } from "react-icons/sl";
import { CiReceipt } from "react-icons/ci";
import { Link, useLocation  } from "react-router-dom";

export function BreadcrumbsRes() {

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="grid grid-cols-3 w-[400px] lg:w-[600px]"> 
      <Link to="/bookings/rooms" className="flex flex-col hover:text-accent-hover group" >
          <div className="flex flex-row">
                <div className="w-full h-5"></div>
                <div className={`rounded-full w-8 h-8 self-center text-lg p-1 border-2 border-accent justify-center flex items-center group-hover:bg-accent-hover group-hover:text-white duration-200 ${isActive("/bookings/rooms") || isActive("/bookings/guests") || isActive("/bookings/confirmation")? "active-link" : ""
        }`}>
                <TbHomeCheck /></div>
                <div className="border-b-2 border-accent w-full h-5"></div>
            </div>
          <div className={`flex justify-center w-full ${isActive("/bookings/rooms") ? "active-link-text" : ""}`}>
            1. Habitaciones</div>
      </Link>
      {/* ======================================================================== */}
      <Link to="/bookings/guests" className="flex flex-col hover:text-accent-hover group">
          <div className="flex flex-row">
                <div className="border-b-2 border-accent w-full h-5"></div>
                <div className={`rounded-full w-8 h-8 self-center text-lg p-1 border-2 border-accent justify-center flex items-center group-hover:bg-accent-hover group-hover:text-white duration-200 ${isActive("/bookings/guests") || isActive("/bookings/confirmation") ? "active-link" : ""
        }`}>
                <SlPeople /></div>
                <div className="border-b-2 border-accent w-full  h-5"></div>
            </div>
          <div className={`flex justify-center w-full ${isActive("/bookings/guests") ? "active-link-text" : ""}`}>
            2. Huéspedes</div>
     </Link>
      {/* ======================================================================== */}
      <Link to="/bookings/confirmation" className="flex flex-col hover:text-accent-hover group">
          <div className="flex flex-row">
                <div className="border-b-2 border-accent w-full  h-5"></div>
                <div className={`rounded-full w-8 h-8 self-center text-lg p-1 border-2 border-accent justify-center flex items-center group-hover:bg-accent-hover group-hover:text-white duration-200 ${isActive("/bookings/confirmation") ? "active-link" : ""
        }`}>
                <CiReceipt /></div>
                <div className="w-full h-5"></div>
            </div>
          <div className={`flex justify-center w-full ${isActive("/bookings/confirmation") ? "active-link-text" : ""}`}>
            3. Confirmación</div>
      </Link>
    </div>
  );
}