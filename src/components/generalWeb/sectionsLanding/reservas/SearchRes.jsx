/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { MdOutlineClose } from "react-icons/md";
import { PplContext } from '../../../../context/RoomContext'; 
// import ResFound from '../reservas/ResFound'; // Asegúrate de importar correctamente ResFound desde la ruta correcta

function SearchRes({  onClose }) {
    const [showModal, setShowModal] = useState(false);
    const {resReftofind, setResReftofind} = useContext(PplContext)
    const [resRef, setResRef] = useState("");
    const [isResFoundModalOpen, setisResFoundModalOpen] = useState(false);
    console.log('isResFoundModalOpen in SearchRes == ', isResFoundModalOpen);

    const handleInputChange = (e) => {
        setResRef(e.target.value);
    };

    const handleSearch = () => {
        setisResFoundModalOpen(true); 
        setResReftofind(resRef); 
        onClose(); 
    };

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className="w-[500px] h-[700px] backdrop-blur-sm gap-3 bg-black/50 flex flex-col text-white justify-center items-center z-10 shadow-xl">
                <button className='self-end mr-10' onClick={onClose}><MdOutlineClose size={40}/></button>
                
                <p>Ingrese el Numero de referencia</p>
                <form>
                    <label htmlFor="resRef">
                        <input
                            name="resRefs"
                            id="resRef"
                            type="text"
                            onChange={handleInputChange}
                        />
                    </label>
                </form>
                <div className='flex flex-rows gap-3'>
                    <button
                        className='bg-black w-full px-5 rounded-md hover:bg-accent-hover'
                        onClick={handleSearch}
                    >
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchRes;
