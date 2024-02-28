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

  return (
    <div className="items-center flex flex-col w-full">
      <div className="text-center w-full font-bold border-b-2 border-b-gray-200 pb-5 uppercase">
        Déjanos un mensaje
      </div>

      {isMessageSent && (
        <div className="text-green-600 font-bold mt-2">
          ¡Su mensaje ha sido enviado con éxito!
        </div>
      )}

        <form ref={form} onSubmit={sendEmail} className="-z-0 w-full">
            <div className="place-content-center mx-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 my-2">
                  <div >
                    <Input label='Nombre' type="text" name="name" />
                  </div>
                  <div >
                    <Input label='Teléfono' type="number" name="telefono" />
                  </div>
              </div>
                  <div className="mb-2">
                    <Input className='bg-white' label='E-mail' type="email" name="email" />
                  </div>
                  <div className="mb-2" >
                    <Textarea className='bg-white' label='Mensaje'  size="md" type="text" name="mensaje"/>
                  </div>
                  
            </div>
 
            <div className="flex flex-row justify-end px-5">
              <div>
                <button type="submit" className='btn btn-secondary btn-xs mx-auto gap-5 rounded-full shadow-xl w-[150px]' >
                  Enviar
                </button>
              </div>
             </div>


        </form>
      </div>
  );
};

export default VariousPanel;
