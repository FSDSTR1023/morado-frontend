import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

let info = [
  {
    id: 1,
    question: 
    "¿Cuál es el horario de entrada y de salida del hotel?",
    answer:
    "El horario de entrada es a partir de las 13:00 horas, mientras que la salida del hotel es a las 11:00 horas. Además, nuestros clientes pueden disfrutar de las instalaciones del hotel hasta las 15:00 horas."
  },
  {
    id: 2,
    question:
    "¿Cuáles son las opciones de aparcamiento que ofrece el Hotel Manzanares?",
    answer:
    "El Hotel Manzanares cuenta con aparcamiento privado sin coste adicional para sus clientes."
  },
  {
    id: 3,
    question:
    "¿El Hotel Manzanares está adaptado para personas con discapacidades?",
    answer:
    "El hotel Manzanares no está adaptado en su totalidad para personas con discapacidades. Debe Consultar directamente con la recepción del hotel para conocer la disponibilidad de los servicios e instalaciones especiales al momento de su llegada"
  },
];

let info2 = [
  {
    id: 10,
    question: 
    "¿Cuál es el horario de entrada y de salida del hotel?",
    answer:
    "El horario de entrada es a partir de las 13:00 horas, mientras que la salida del hotel es a las 11:00 horas. Además, nuestros clientes pueden disfrutar de las instalaciones del hotel hasta las 15:00 horas."
  },
  {
    id: 11,
    question:
    "¿Cuáles son las opciones de aparcamiento que ofrece el Hotel Manzanares?",
    answer:
    "El Hotel Manzanares cuenta con aparcamiento privado sin coste adicional para sus clientes."
  },
  {
    id: 12,
    question:
    "¿El Hotel Manzanares está adaptado para personas con discapacidades?",
    answer:
    "El hotel Manzanares no está adaptado en su totalidad para personas con discapacidades. Debe Consultar directamente con la recepción del hotel para conocer la disponibilidad de los servicios e instalaciones especiales al momento de su llegada"
  },
];




export default function AccordionCustomAnimation() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex flex-col h-[550px] justify-center">
      <div className='self-center uppercase font-tertiary mb-5 text-2xl h-5'>
        Preguntas Frecuentes
      </div>
      <div className="flex md:flex-row flex-col h-[300px]">
        <div className="w-[80%] p-10">
          <div className="container mx-auto lg:px-0">
            <div className="grid grid-cols-1 max-w-md mx-auto lg:max-w-none lg:mx-0 py-4">
              <div className="text-2xl">
                {info.map((qa) => (
                  <div key={qa.id}>
                    <Accordion open={open === qa.id} animate={ANIMATION}>
                      <AccordionHeader onClick={() => handleOpen(qa.id)}>
                        {qa.question}
                      </AccordionHeader>
                      <AccordionBody className="text-lg w-full">{qa.answer}</AccordionBody>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> {/* ======================================== */}
        <div className="w-[80%] p-10">
          <div className="container mx-auto lg:px-0">
            <div className="grid grid-cols-1 max-w-md mx-auto lg:max-w-none lg:mx-0 py-4">
              <div className="text-2xl">
                {info2.map((qa) => (
                  <div key={qa.id}>
                    <Accordion open={open === qa.id} animate={ANIMATION}>
                      <AccordionHeader onClick={() => handleOpen(qa.id)}>
                        {qa.question}
                      </AccordionHeader>
                      <AccordionBody className="text-lg w-full">{qa.answer}</AccordionBody>
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> {/* ======================================== */}
      </div>
    </div>
  );
}
