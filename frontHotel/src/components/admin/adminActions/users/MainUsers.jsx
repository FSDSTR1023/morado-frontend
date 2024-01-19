// import React from 'react'

import AddUser from "./AddUsers"
import UsersList from "./UsersList"

const MainUsers = () => {
  return (
    <div className="w-full space-x-10 bg-gray-50 flex p-5">
        <AddUser />
        <UsersList />
    </div>
  )
}

export default MainUsers