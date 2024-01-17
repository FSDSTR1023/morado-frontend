// import React from 'react'

import AddUser from "./AddUsers"
import UsersList from "./UsersList"
// import DataGridDemo from "./../users/Prueba.jsx"

const MainUsers = () => {
  return (
    <div className="flex space-x-10">
        <AddUser />
        <UsersList />
    </div>
  )
}

export default MainUsers