/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PiUserListFill } from 'react-icons/pi';

const cloudinaryUploadPresets = import.meta.env.VITE_CLOUDINARY_UPLOADPRESETS;

const AddRoom = () => {
  const newRoomInit = {
    roomNum: 0,
    title: '',
    isSuite: false,
    roomType: '',
    desc: '',
    amenities: '',
    rate: 0,
    maxPeople: 0,
    status: 'disponible',
    bedNum: 0,
    bedType: '',
    photos: '',
  };

  let { id } = useParams();
  const [addRoom, setAddRoom] = useState(newRoomInit);
  const [urlId, setUrlId] = useState(id || '');
  const [image, setImage] = useState(null);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Hotel_MAnzanares');
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dqowbomuh/auto/upload',
        formData
      );

      setImage(response.data.secure_url);
      setAddRoom((prevData) => ({ ...prevData, photos: response.data.secure_url}));
    } catch (error) {
      console.log('No se puede guardar/actualizar la habitación', error);
    }
    // setImage(response.data.secure_url);
  };

  const handleOnChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setAddRoom((prevData) => ({ ...prevData, [name]: newValue }));

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

        
        //await axios.put(`http://localhost:5000/rooms`, addRoom);
        //console.log('Habitación Actualizada con éxito');
        console.log(addRoom);
        await axios.post('http://localhost:5000/rooms', addRoom);
        console.log('Habitación registrada con éxito');
      setAddRoom(newRoomInit);
      setUrlId('');
    } catch (error) {
      console.error('No se puede guardar/actualizar la habitación', error);
    }
  };

  const actualId = async (idValue) => {
    const res = await axios.get('http://localhost:5000/rooms/' + idValue);
    setAddRoom({
      roomNum: res.data.roomNum,
      title: res.data.title,
      isSuite: res.data.isSuite,
      roomType: res.data.roomType,
      desc: res.data.desc,
      amenities: res.data.amenities,
      rate: res.data.rate,
      maxPeople: res.data.maxPeople,
      status: res.data.status,
      bedNum: res.data.bedNum,
      bedType: res.data.bedType,
      photos: res.data.photos,
    });
  };

  const isMounted = useRef(true);

  useEffect(() => {
    // if (isMounted.current && urlId !== "") {
    if (isMounted.current && urlId !== '' && urlId !== undefined) {
      actualId(urlId);
    }
    isMounted.current = false;
  }, [urlId]);

  return (
    <div className='flex flex-col items-center w-full gap-5'>
      <div className='flex w-full shadow-md justify-between'>
        <div className='p-5 text-xl font-bold self-start'>
          Datos de la habitación
        </div>
        <div className='flex'>
          <Link
            className='flex h-14 items-center hover:text-[#003A70] pr-10'
            to='../guests'>
            <PiUserListFill
              size={25}
              className='w-14'
            />{' '}
            Lista de Habitaciones
          </Link>
        </div>
      </div>

      <div className='flex shadow-xl p-8 w-fit'>
        <form onSubmit={handleSubmit}>
          {/* //////////////////////////////////////////////////////////////////////////////////////  */}
          <div>
            <div className='border-b-black border-b-2 mb-7'>
              Datos Habitación
            </div>
            <div className='place-content-center px-5'>
              <div className='flex flex-row gap-5'>
                {' '}
                {/* =================================================== */}
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                  {' '}
                  Número de Habitación <br />
                  <input
                    className='px-2 border border-20 mb-3 shadow w-72'
                    type='text'
                    name='roomNum'
                    value={addRoom.roomNum}
                    onChange={handleOnChange}
                  />
                </label>
                {/* ------------------------- */}
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                  {' '}
                  Titulo de Habitación <br />
                  <input
                    className='px-2 border border-20 mb-3 shadow w-72'
                    type='text'
                    name='title'
                    value={addRoom.title}
                    onChange={handleOnChange}
                  />
                </label>
              </div>{' '}
              {/* ================================================================================== */}
              <label className='block text-sm font-medium leading-6 text-gray-900'>
                {' '}
                Suite
                <br />
                <input
                  className='px-2 border border-20 mb-3 shadow pr-1'
                  type='checkbox'
                  name='isSuite'
                  value={addRoom.isSuite}
                  onChange={handleOnChange}
                />
              </label>
              {/* ================================================================================== */}
              <label className='block text-sm font-medium leading-6 text-gray-900'>
                {' '}
                Tipo de Cama <br />
                <input
                  className='px-2 border border-20 mb-3 shadow w-full'
                  type='text'
                  name='bedType'
                  value={addRoom.bedType}
                  onChange={handleOnChange}
                />
              </label>
              {/* ================================================================================== */}
              <label className='block text-sm font-medium leading-6 text-gray-900'>
                {' '}
                Status <br />
                <input
                  className='px-2 border border-20 mb-3 shadow w-full'
                  type='text'
                  name='status'
                  value={addRoom.status}
                  onChange={handleOnChange}
                />
              </label>
              {/* ================================================================================== */}
              <div className='flex flex-row gap-4'>
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                  {' '}
                  Tipo de Habitación <br />
                  <input
                    className='px-2 border border-20 mb-3 shadow w-full'
                    type='text'
                    name='roomType'
                    value={addRoom.roomType}
                    onChange={handleOnChange}
                  />
                </label>
                {/* ================================================================================== */}
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                  {' '}
                  Descripción <br />
                  <input
                    className='px-2 border border-20 mb-3 shadow w-full'
                    type='text'
                    name='desc'
                    value={addRoom.desc}
                    onChange={handleOnChange}
                  />
                </label>
                {/* ================================================================================== */}
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                  {' '}
                  Amenities <br />
                  <input
                    className='px-2 border border-20 mb-3 shadow w-full'
                    type='text'
                    name='amenities'
                    value={addRoom.amenities}
                    onChange={handleOnChange}
                  />
                </label>
                {/* ================================================================================== */}
              </div>
              <div className='flex flex-row gap-4 w-full'>
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                  {' '}
                  Rate <br />
                  <input
                    className='px-2 border border-20 mb-3 shadow '
                    type='number'
                    name='rate'
                    value={addRoom.rate}
                    onChange={handleOnChange}
                  />
                </label>
                {/* ================================================================================== */}
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                  {' '}
                  Máximo de personas <br />
                  <input
                    className='px-2 border border-20 mb-3 shadow'
                    type='number'
                    name='maxPeople'
                    value={addRoom.maxPeople}
                    onChange={handleOnChange}
                  />
                </label>
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                  {' '}
                  Número de camas <br />
                  <input
                    className='px-2 border border-20 mb-3 shadow'
                    type='number'
                    name='bedNum'
                    value={addRoom.bedNum}
                    onChange={handleOnChange}
                  />
                </label>
                {/* ================================================================================== */}
              </div>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////  */}

            <div className='border-b-black border-b-2 my-7 flex flex-row justify-between'>
              Fotos de la habitación
            </div>

            <div className='flex gap-5 px-5'>
              {/* ================================================================================== */}
              <div>
                <input
                  type='file'
                  name='image'
                  onChange={handleImageChange}
                  multiple={false}
                />
              </div>
            </div>
            {/* //////////////////////////////////////////////////////////////////////////////////////  */}
          </div>
          <div></div>
          <div className='flex flex-col w-full'>
            <button
              type='submit'
              className='bg-[#003A70] text-white hover:bg-[#dadada] hover:text-[#003A70] h-8'>
              Guardar
            </button>
          </div>
        </form>

        <img
          className='ml-7 w-80 object-cover shadow-2xl'
          src='https://cdn.pixabay.com/photo/2019/07/16/02/12/hotel-4340863_1280.jpg'
          alt='Agregar Habitación'
        />
      </div>
    </div>
  );
};

export default AddRoom;
