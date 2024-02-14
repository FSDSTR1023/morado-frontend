import axios from 'axios';

const urlUser = import.meta.env.VITE_BACKEND_USER_URL;

// ========:::: GET ALL  ::::========

const getAllusers = async (setAllusers) => {
  try {
    await axios.get(`${urlUser}`).then(({ data }) => {
      console.log('data --->', data);
      setAllusers(data);
    });
  } catch (error) {
    console.error('No se pueden obtener los usuarios');
  }
};

export { getAllusers };
