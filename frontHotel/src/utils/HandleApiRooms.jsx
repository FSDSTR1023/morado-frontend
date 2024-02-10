import axios from 'axios';

const urlRoom = import.meta.env.VITE_BACKEND_ROOM_URL;

// ========:::: GET ALL  ::::========

const getAllRooms = async (setAllRooms) => {
  try {
    await axios.get(`${urlRoom}`).then(({ data }) => {
      // console.log("data --->", data);
      setAllRooms(data);
    });
  } catch (error) {
    console.error('No se pueden obtener las Habitaciones');
  }
};

export { getAllRooms };
