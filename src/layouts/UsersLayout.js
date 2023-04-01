import React from 'react'
import { Outlet } from 'react-router'

const UsersLayout = () => {
  return (
    <div className='usersLayout'>
        <h1>Users:</h1>
      <Outlet/>
    </div>
  )
}

export default UsersLayout
