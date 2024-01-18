// import React from 'react'

import AddUser from "./AddUsers"
import UsersList from "./UsersList"

const MainUsers = () => {
  return (
    <div className="flex space-x-10">
        <AddUser />
        <UsersList />
    </div>
  )
}

export default MainUsers