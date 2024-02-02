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
  {
    id: 4,
    question: "¿El hotel dispone de servicio de habitaciones las 24 horas?",
    answer:
      "Sí, nuestro servicio de habitaciones está disponible las 24 horas del día. Puedes disfrutar de deliciosas comidas y bebidas en la comodidad de tu habitación en cualquier momento. Consulta el menú en la habitación para conocer las opciones disponibles."
  },
];

let info2 = [
  {
    id: 10,
    question: "¿Ofrecen servicio de transporte al aeropuerto?",
    answer:
      "Sí, ofrecemos servicio de transporte al aeropuerto. Puedes coordinar el servicio con nuestro personal de recepción al hacer tu reserva o durante tu estancia en el hotel."
  },
  {
    id: 11,
    question: "¿Se admiten mascotas en el hotel?",
    answer:
      "Lamentablemente, no permitimos mascotas en nuestras instalaciones. Sin embargo, podemos proporcionarte información sobre servicios de cuidado de mascotas cercanos si es necesario."
  },
  {
    id: 12,
    question: "¿Cómo puedo reservar servicios adicionales, como excursiones?",
    answer:
      "Puedes reservar servicios adicionales, como excursiones o tratamientos de spa, a través de nuestro mostrador de recepción. Nuestro personal estará encantado de ayudarte a planificar actividades durante tu estancia."
  },
  {
    id: 13,
    question: "¿Ofrecen opciones de entretenimiento nocturno en el hotel?",
    answer:
      "Sí, ofrecemos opciones de entretenimiento nocturno, que pueden incluir espectáculos en vivo, música en vivo o eventos temáticos. Consulta nuestro calendario de eventos o pregunta en recepción para conocer las actividades disponibles durante tu estancia."
  },
];




export default function AccordionCustomAnimation() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="pt-28">
        <div className='flex justify-center uppercase font-tertiary mb-5 text-2xl h-5 w-full'>
          Preguntas Frecuentes
        </div>
      <div className="flex flex-col h-fit lg:h-[450px] ">
        <div className="flex lg:mt-5 md:flex-row flex-col px-5 lg:px-14 lg:gap-10">
              <div className="grid grid-cols-1 lg:mx-0 py-4 w-full">
                <div className="text-2xl">
                  {info.map((qa) => (
                    <div key={qa.id}>
                      <Accordion open={open === qa.id} animate={ANIMATION}>
                        <AccordionHeader onClick={() => handleOpen(qa.id)}>
                          {qa.question}
                        </AccordionHeader>
                        <AccordionBody className="text-lg w-full px-5">{qa.answer}</AccordionBody>
                      </Accordion>
                    </div>
                  ))}
                </div>
              </div>{/* ======================================== */}
              <div className="grid grid-cols-1 lg:mx-0 py-4 w-full">
                <div className="text-2xl">
                  {info2.map((qa) => (
                    <div key={qa.id}>
                      <Accordion open={open === qa.id} animate={ANIMATION}>
                        <AccordionHeader onClick={() => handleOpen(qa.id)}>
                          {qa.question}
                        </AccordionHeader>
                        <AccordionBody className="text-lg w-full px-5">{qa.answer}</AccordionBody>
                      </Accordion>
                    </div>
                  ))}
                </div>
              </div>{/* ======================================== */}
          
        </div>
      </div>
    </div>
  );
}
