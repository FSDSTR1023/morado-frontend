/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


import { useEffect, useState } from "react";
import { getAllusers } from "../../../../utils/HandelApi.jsx";
import BdUserslist from './../users/BdUserslist.jsx'

// const UsersList = () => {
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  }
    // { id:"nombre", label:"Nombre" },
    // { id:"apellido", label:"Apellido" },
    // { id:"telefono", label:"Teléfono" },
    // { id:"email", label:"E-mail" },
    // { id:"pais", label:"País" },
    // { id:"identificacion", label:"Identificación" },
    // { id:"usuario", label:"Usuario" }

];



export default function DataGridDemo() {

    const [allusers, setAllusers] = useState([]);

    useEffect(() => {
        getAllusers(setAllusers);
      }, []);

    //   const rows = [
        //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
        //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
        //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
        //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
        //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //   ]
   
 return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={allusers.map((item) => (
                <BdUserslist 
                  key={item.id} 
                      name={item.name} 
                      lastName={item.lastName}
                      phone={item.phone}
                      email={item.email}
                      country={item.country}
                      docType={item.docType}
                      docNum={item.docNum}
                      username={item.username}
                />
                
              ))}
       
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}