import axios from 'axios';

const baseUrl = "http://localhost:5000/rooms"



// ========:::: GET ALL  ::::========

const getAllRooms = async (setAllRooms) => {
  try {
   await axios.get(baseUrl).then(({ data }) => {
      // console.log("data --->", data);
      setAllRooms(data);
    });
  } catch (error) {
    console.error("No se pueden obtener las Habitaciones");
  }
};

export { getAllRooms };