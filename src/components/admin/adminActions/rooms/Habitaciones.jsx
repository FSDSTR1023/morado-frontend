/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PiArrowFatLinesLeft, PiUserListFill } from "react-icons/pi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosTrash } from "react-icons/io";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cloudinaryUploadPresets = import.meta.env.VITE_CLOUDINARY_UPLOADPRESETS;
const apiKey = import.meta.env.VITE_CLOUDINARY_APIKEY;
const urlRoom = import.meta.env.VITE_BACKEND_ROOM_URL;

const AddRoom = () => {
  const newRoomInit = {
    roomNum: 0,
    title: "",
    roomType: "",
    desc: "",
    amenities: [],
    rate: "",
    maxPeople: "",
    status: "",
    bedNum: "",
    bedType: "",
    photos: [],
    featured: false,
  };

  let { id } = useParams();
  const [addRoom, setAddRoom] = useState(newRoomInit);
  const [urlId, setUrlId] = useState(id || "");

  const [loading, setLoading] = useState("");

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinaryUploadPresets);

    setLoading("true");
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dqowbomuh/auto/upload",
        formData
      );
      const imageUrl = response.data.secure_url;
      const newImageArray = [...addRoom.photos, imageUrl];
      setAddRoom((prevData) => ({ ...prevData, photos: newImageArray }));
    } catch (error) {
      console.log("No se puede guardar/actualizar la habitación", error);
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    setAddRoom((prevData) => ({
      ...prevData,
      photos: prevData.photos.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleCheckboxChange = (amenity, isChecked) => {
    let newAmenities;

    if (isChecked) {
      newAmenities = [...addRoom.amenities, amenity];
    } else {
      newAmenities = addRoom.amenities.filter((item) => item !== amenity);
    }

    setAddRoom((prevData) => ({ ...prevData, amenities: newAmenities }));
  };

  const handleOnChange = (event) => {
    const { name, value, type, checked, options } = event.target;
    let newValue;

    if (type === "checkbox") {
      newValue = checked;
    } else if (type === "select-multiple") {
      newValue = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
    } else {
      newValue = value;
    }

    setAddRoom((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response;

      if (urlId) {
        await axios.put(`${urlRoom}/${urlId}`, addRoom);
        console.log("Usuario Actualizado con éxito");
      } else {
        await axios.post(`${urlRoom}`, addRoom);
        console.log("Usuario registrado con éxito");
      }
      setAddRoom(newRoomInit);
      setUrlId("");
    } catch (error) {
      console.error("No se puede guardar/actualizar el usuario", error);
    }
  };

  const actualId = async (idValue) => {
    const res = await axios.get(`${urlRoom}/` + idValue);
    setAddRoom({
      roomNum: res.data.roomNum,
      title: res.data.title,
      roomType: res.data.roomType,
      desc: res.data.desc,
      amenities: res.data.amenities,
      rate: res.data.rate,
      maxPeople: res.data.maxPeople,
      status: res.data.status,
      bedNum: res.data.bedNum,
      bedType: res.data.bedType,
      photos: res.data.photos,
      featured: res.data.featured,
    });
  };

  const isMounted = useRef(true);
  const [active, setActive] = React.useState();

  useEffect(() => {
    if (isMounted.current && urlId !== "" && urlId !== undefined) {
      actualId(urlId);
    }
    isMounted.current = false;
  }, [urlId]);

  const amenityLabels = {
    TV: "Televisión",
    ac: "Aire Acondicionado",
    nevera: "Nevera",
    Wifi: "WiFi"
  };

  const roomAmenity = ["TV", "ac", "nevera", "Wifi"];

  const PrevArrow = ({ onClick }) => (
    <div
      className="slick-arrow slick-prev h-full  text-accent/30 hover:text-accent-hover mx-0"
      onClick={onClick}
    >
      <FaChevronLeft className="text-lg w-2 ml-3" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="slick-arrow slick-next h-full text-accent/30 hover:text-accent-hover mx-0"
      onClick={onClick}
    >
      <FaChevronRight className="text-lg w-2" />
    </div>
  );
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    lazyLoad: 'ondemand'
  };

  return (
    <div className="flex flex-col items-center w-full gap-5">

      {/* <div className="flex w-full shadow-md justify-between"> */}
      <div className="flex flex-col shadow-md md:justify-between md:flex-row w-full">
        <div className="p-2 md:p-5 text-xl font-bold items-center">Datos de la habitación</div>
        <div className="flex">
          <Link
            className="flex h-14 items-center hover:text-[#003A70] pr-10"
            to="../habitaciones"
          >
            <PiUserListFill size={25} className="w-14" /> Lista de Habitaciones
          </Link>
        </div>
      </div>

      <div className="flex shadow-xl p-2 md:p-8 w-full md:w-auto">
        <div className="max-h-[78vh] overflow-y-auto flex flex-col md:flex-row">
        <form>
          {/* //////////////////////////////////////////////////////////////////////////////////////  */}
          <div>
            <div className="border-b-black border-b-2 mb-7">
              Datos Habitación  
            </div>
            <div className="place-content-center px-5">
              <div className="flex flex-col md:flex-row gap-1 md:gap-5">
                {/* =================================================== */}
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Número de Habitación <br />
                  <input
                    className="pl-2 border border-20 mb-3 shadow"
                    type="number"
                    name="roomNum"
                    value={addRoom.roomNum}
                    onChange={handleOnChange}
                  />
                </label>
                {/* ------------------------- */}
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Titulo de Habitación <br />
                  <input
                    className="px-2 border border-20 mb-3 shadow w-full md:w-80"
                    type="text"
                    name="title"
                    value={addRoom.title}
                    onChange={handleOnChange}
                  />
                </label>

                {/* ================================================================================== */}
                <label className="flex flex-row-reverse lg:flex-col justify-end md:justify-center">
                  <span className="text-sm font-medium leading-6 text-gray-900">
                    Destacado
                  </span>
                  <input
                    className="mb-3 drop-shadow mr-2"
                    type="checkbox"
                    name="featured"
                    checked={addRoom.featured}
                    onChange={handleOnChange}
                  />
                </label>
              </div>
              {/* ================================================================================== */}
              <div className="flex justify-stretch gap-0 md:gap-2 flex-col md:flex-row">
                <label className="block text-sm font-medium leading-6 text-gray-900 w-full">
                  Status <br />
                  <select
                    className="px-2 border border-20 mb-3 shadow h-7 w-full"
                    name="status"
                    id="status"
                    value={addRoom.status}
                    onChange={handleOnChange}
                    multiple={false}
                  >
                    <option>Seleccione</option>
                    <optgroup label="--------------">
                      <option value="disponible">disponible</option>
                      <option value="no disponible">no disponible</option>
                    </optgroup>
                  </select>
                </label>

                {/* ================================================================================== */}
                <label className="block text-sm font-medium leading-6 text-gray-900 w-full">
                  Tipo de Cama <br />
                  <select
                    className="px-2 border border-20 mb-3 shadow h-7 w-full"
                    name="bedType"
                    id="bedType"
                    value={addRoom.bedType}
                    onChange={handleOnChange}
                    multiple={false}
                  >
                    <option>Seleccione</option>
                    <optgroup label="--------------">
                      <option value="normal">normal</option>
                      <option value="king size">king size</option>
                    </optgroup>
                  </select>
                </label>
                {/* ================================================================================== */}
                <label className="block text-sm font-medium leading-6 text-gray-900 w-full">
                  Tipo de Habitación <br />
                  <select
                    className="px-2 border border-20 mb-3 shadow h-7 w-full"
                    name="roomType"
                    id="roomType"
                    value={addRoom.roomType}
                    onChange={handleOnChange}
                  >
                    <option>Seleccione</option>
                    <optgroup label="---------------------">
                      <option value="individual">Individual</option>
                      <option value="doble">Doble</option>
                      <option value="doble de uso individual">
                        Doble de uso individual
                      </option>
                      <option value="triple">Triple</option>
                    </optgroup>
                  </select>
                </label>
              </div>
              {/* ================================================================================== */}

              <div className="flex flex-col gap-0 md:flex-row md:gap-4 w-full">
                {/* ================================================================================== */}
                {/* Amenities */}
                <div className="block text-sm font-medium leading-6 text-gray-900 w-full">
                  <span className="flex border-b-2 w-full mb-3">Amenities</span>
                  <div className="ml-3">
                    {roomAmenity.map((amenity) => (
                      <label
                        key={amenity}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        <input
                          className="px-2 border border-20 mb-3 shadow mr-2"
                          type="checkbox"
                          name={amenity}
                          onChange={(e) =>
                            handleCheckboxChange(amenity, e.target.checked)
                          }
                          checked={addRoom.amenities.includes(amenity)}
                        />{" "}
                        {amenityLabels[amenity]}
                      </label>
                    ))}
                  </div>
                </div>

                {/* ================================================================================== */}
                <div className="flex flex-col gap-4 w-full lg:mt-10">
                  {/* ================================================================================== */}
                  <label className="flex text-sm font-medium leading-6 text-gray-900">
                    <span className="w-full">Máximo de personas</span>
                    <div className="border-b-2 w-full h-5 mr-2 border-dotted"></div>
                    <input
                      className="border border-20 shadow w-1/4 pl-2"
                      type="number"
                      name="maxPeople"
                      value={addRoom.maxPeople}
                      onChange={handleOnChange}
                    />
                  </label>
                  <label className="flex text-sm font-medium leading-6 text-gray-900">
                    <span className="w-full">Número de camas</span>
                    <div className="border-b-2 w-full h-5 mr-2 border-dotted"></div>
                    <input
                      className="border border-20 shadow w-1/4 pl-2"
                      type="number"
                      name="bedNum"
                      value={addRoom.bedNum}
                      onChange={handleOnChange}
                    />
                  </label>
                  <div className="w-full border-b-2 border-dashed"></div>
                  {/* ================================================================================== */}
                  <label className="flex text-sm font-medium leading-6 text-gray-900 justify-between">
                    <span className="w-fit">Rate</span>
                    <div className="border-b-2 w-full h-5 mx-2 border-dotted"></div>
                    <span className="mr-3">€</span>
                    <input
                      className="border border-20 shadow w-1/4 pl-2"
                      type="number"
                      name="rate"
                      value={addRoom.rate}
                      onChange={handleOnChange}
                    />
                  </label>
                </div>
              </div>
              {/* ================================================================================== */}
              <div className="flex flex-col lg:flex-row lg:gap-3  mt-2">
                <label className="block text-sm font-medium leading-6 text-gray-900 w-full">
                  Descripción <br />
                  <textarea
                    className="p-2 border border-20 shadow resize-none w-full"
                    name="desc"
                    value={addRoom.desc}
                    onChange={handleOnChange}
                  />
                </label>
                <div className="flex flex-col">
                  <div className="border-b-black border-b-2 flex flex-row justify-between mb-2">
                    Galería
                  </div>

                  <div className="flex gap-5 px-0 md:px-5 flex-col">
                    {/* ================================================================================== */}
                    <div>
                      <input
                        className="bg-white text-gray-800 font-semibold py-2 px-1 md:px-2 border border-gray-400 rounded shadow w-full"
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        multiple={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <br />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-[#003A70] text-white hover:bg-[#dadada] hover:text-[#003A70] h-8"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="ml-7 flex flex-col overflow-visible md:overflow-hidden">
          <div className="grid h-full w-full">
            <div className="flex h-full w-full mb-44 pb-3 justify-start ml-2">
              <img
                className="w-72 md:w-80 object-cover shadow-xl h-full"
                src={active || addRoom.photos[0]}
                alt=""
              />
            </div>
            <div className="flex justify-center w-72">
              <div className="w-full ml-8">
              <Slider {...sliderSettings}>
                {addRoom.photos.map((photo, index) => (
                  <div key={index} className="relative">
                    <img
                      src={photo}
                      onClick={() => setActive(photo)}
                      className="h-14 cursor-pointer rounded-xl px-1 object-cover object-center"
                      alt={`Preview ${index + 1}`}
                    />
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="absolute bottom-0 right-0 p-1 bg-white text-red-500 rounded-lg"
                    >
                      <IoIosTrash />
                    </button>
                  </div>
                ))}
              </Slider>
              </div>
              
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
