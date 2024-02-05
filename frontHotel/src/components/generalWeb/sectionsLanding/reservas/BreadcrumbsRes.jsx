import { TbHomeCheck } from "react-icons/tb";
import { SlPeople } from "react-icons/sl";
import { CiReceipt } from "react-icons/ci";
import { Link } from "react-router-dom";

export function BreadcrumbsRes() {
  return (
    <div className="grid grid-cols-3 w-full lg:w-[80%]"> 
      <Link to="/bookings/rooms" className="flex flex-col hover:text-accent-hover group">
          <div className="flex flex-row">
                <div className="w-full h-5"></div>
                <div className="rounded-full w-8 h-8 self-center text-lg p-1 border-2 border-accent justify-center flex items-center group-hover:bg-accent-hover group-hover:text-white duration-200">
                <TbHomeCheck /></div>
                <div className="border-b-2 border-accent w-full h-5"></div>
            </div>
          <div className="flex justify-center w-full">
            1. Habitaciones</div>
      </Link>
      {/* ======================================================================== */}
      <Link to="/bookings/guests" className="flex flex-col hover:text-accent-hover group">
          <div className="flex flex-row">
                <div className="border-b-2 border-accent w-full h-5"></div>
                <div className="rounded-full w-8 h-8 self-center text-lg p-1 border-2 border-accent justify-center flex items-center group-hover:bg-accent-hover group-hover:text-white duration-200">
                <SlPeople /></div>
                <div className="border-b-2 border-accent w-full  h-5"></div>
            </div>
          <div className="flex justify-center w-full">
            2. Huéspedes</div>
     </Link>
      {/* ======================================================================== */}
      <Link to="/bookings/confirmation" className="flex flex-col hover:text-accent-hover group">
          <div className="flex flex-row">
                <div className="border-b-2 border-accent w-full  h-5"></div>
                <div className="rounded-full w-8 h-8 self-center text-lg p-1 border-2 border-accent justify-center flex items-center group-hover:bg-accent-hover group-hover:text-white duration-200">
                <CiReceipt /></div>
                <div className="w-full h-5"></div>
            </div>
          <div className="flex justify-center w-full">
            3. Confirmación</div>
      </Link>
    </div>
  );
}