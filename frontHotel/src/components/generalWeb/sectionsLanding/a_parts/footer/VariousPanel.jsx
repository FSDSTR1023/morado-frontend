/* eslint-disable no-unused-vars */
import React from "react";

const VariousPanel = () => {
  return (
    <div className="items-center flex flex-col">
      <div className="text-center w-full font-bold border-b-2 border-b-gray-200 pb-5 uppercase">
        Déjanos un mensaje
      </div>

        <form className="w-[80%]">
            <div className="place-content-center">
              <label className="block text-sm font-medium leading-6 text-gray-900"> Nombre <br />
                <input className="w-full px-2 border border-20 shadow" type="text" name="name" />
              </label> {/* ------------------------- */}
              <label className="block text-sm font-medium leading-6 text-gray-900"> Teléfono <br />
                <input className="w-full px-2 border border-20 shadow" type="number" name="telefono" />
              </label> {/* ------------------------- */}
              <label className="block text-sm font-medium leading-6 text-gray-900"> Email <br />
                <input className="w-full px-2 border border-20 shadow" type="email" name="email" />
              </label> {/* ------------------------- */}
              <label className="block text-sm font-medium leading-6 text-gray-900"> Mensaje <br />
                <textarea className="w-full px-2 border border-20 shadow" type="text" name="mensaje"/>
              </label> {/* ------------------------- */}
            </div>
 
            <div className="w-full flex flex-row justify-center gap-5">
                <div className="flex flex-col w-[100px]">
                    <button type="submit" className='btn btn-secondary btn-xs mx-auto gap-5 rounded-full shadow-xl' >
                        Enviar
                    </button>
                </div>
                <div className="flex flex-col w-[100px]">
                    <button type="submit" className='btn btn-secondary btn-xs mx-auto gap-5 rounded-full shadow-xl' >
                        Limpiar
                    </button>
                </div>
            </div>


        </form>
      </div>
  );
};

export default VariousPanel;
