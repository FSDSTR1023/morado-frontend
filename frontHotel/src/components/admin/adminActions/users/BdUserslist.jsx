/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'



function BdUserslist({
    name,
    lastName,
    phone,
    email,
    country,
    docType,
    docNum,
    username
}) {
    return (
       <div>
      {/* <div className='flex flex-row space-x-10'>
          <div id='name'>{name}</div>
          <div id='lastName'>{lastName}</div>
          <div id='phone'>{phone}</div>
          <div id='email'>{email}</div>
          <div id='country'>{country}</div>
          <div id='docType'>{docType}</div>
          <div id='docNum'>{docNum}</div>
          <div id='username'>{username}</div>
      </div> */}
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

          {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> */}
              {/* <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <th className="px-6 py-3"> Nombre  </th>
                  <th className="px-6 py-3"> Apellido </th>
                  <th className="px-6 py-3"> Teléfono </th>
                  <th className="px-6 py-3"> E-mail </th>
                  <th className="px-6 py-3"> País  </th>
                  <th className="px-6 py-3 col-span-2"> Identificación </th>
                  <th className="px-6 py-3"> Usuario </th>
              </tr> */}
          {/* </thead> */}
          <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-4 py-2 min-w-15 max-w-10 truncate"> {name} </td>
                  <td className="px-4 py-2 min-w-15 max-w-10 truncate"> {lastName} </td>
                  <td className="px-4 py-2  max-w-10 truncate"> {phone} </td>
                  <td className="px-4 py-2 min-w-10 max-w-10 truncate"> {email} </td>
                  <td className="px-4 py-2 min-w-20 max-w-10 truncate"> {country} </td>
                  <td className="px-4 py-2 min-w-10 max-w-10 truncate"> {docType} {docNum}</td>
                  <td className="px-4 py-2 min-w-7 max-w-10 truncate"> {username} </td>
            </tr>
              
          </tbody>
      </table>

      </div>
    )
  }
  
  
  
  export default BdUserslist