/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Input, Textarea } from "@material-tailwind/react";
import emailjs from '@emailjs/browser';

const VariousPanel = () => {
  const [isMessageSent, setMessageSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9uopx8m', 'template_rtgwegs', form.current, {
        publicKey: 'NWlP7ZYecObtDdwNG',
      })
      .then(
        () => {
          setMessageSent(true);
          form.current.reset();
          setTimeout(() => setMessageSent(false), 4000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessageSent(false);
        },
      );
  };

  const clearForm = () => {
    form.current.reset();
    setMessageSent(false);
  };

  return (
    <div className="items-center flex flex-col">
      <div className="text-center w-full font-bold border-b-2 border-b-gray-200 pb-5 uppercase">
        Déjanos un mensaje
      </div>

      {isMessageSent && (
        <div className="text-green-600 font-bold mt-2">
          ¡Su mensaje ha sido enviado con éxito!
        </div>
      )}

        <form ref={form} onSubmit={sendEmail}>
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
                <button type="button" className='btn btn-secondary btn-xs mx-auto gap-5 rounded-full shadow-xl' onClick={clearForm}>
                  Limpiar
                </button>
                </div>
            </div>


        </form>
      </div>
  );
};

export default VariousPanel;
