import axios from 'axios';

const urlRes = import.meta.env.VITE_BACKEND_BOOKINGS_URL;

// ========:::: GET ALL  ::::========

const getAllBookings = async (setAllbookings) => {
  try {
    await axios.get(`${urlRes}`).then(({ data }) => {
      console.log("Reservaciones ===", data);
      setAllbookings(data);
    });
  } catch (error) {
    console.error('No se pueden obtener las Reservaciones');
  }
};

export {getAllBookings}