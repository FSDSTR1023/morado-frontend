/* eslint-disable no-unused-vars */
import React from "react";
import { Input, Textarea } from "@material-tailwind/react";

const VariousPanel = () => {
  return (
    <div className="items-center flex flex-col">
      <div className="text-center w-full font-bold border-b-2 border-b-gray-200 pb-5 uppercase">
        Déjanos un mensaje
      </div>

        <form>
            <div className="place-content-center mx-5">
              <div className="flex flex-row mb-2 gap-2 mt-3">
                  <Input  className='bg-white' label='Nombre' type="text" name="name" />
                  <Input className='bg-white' label='Teléfono' type="number" name="telefono" />
              </div>
                  <div className="mb-2">
                    <Input className='bg-white' label='E-mail' type="email" name="email" />
                  </div>
                  <div className="mb-2" >
                    <Textarea className='bg-white' label='Mensaje'  size="md" type="text" name="mensaje"/>
                  </div>
                  
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
