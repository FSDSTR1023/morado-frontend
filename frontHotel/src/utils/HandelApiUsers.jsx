import axios from 'axios';

const baseUrl = "http://localhost:5000/users"



// ========:::: GET ALL  ::::========

const getAllusers = async (setAllusers) => {
  try {
   await axios.get(baseUrl).then(({ data }) => {
      console.log("data --->", data);
      setAllusers(data);
    });
  } catch (error) {
    console.error("No se pueden obtener los usuarios");
  }
};

export { getAllusers };
