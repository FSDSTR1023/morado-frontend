import axios from 'axios';

const urlRes = import.meta.env.VITE_BACKEND_BOOKINGS_URL;

const ReservationProcess = {
  saveReservation: async (reservationData) => {
    try {
      const response = await axios.post(`${urlRes}`, reservationData);
      // console.log('Response from server====', response.data);
      return response.data;
    } catch (error) {
      console.error('Error saving reservation:', error);
      throw error;
    }
  },
};

export default ReservationProcess;