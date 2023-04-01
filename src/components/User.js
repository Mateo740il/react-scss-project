import React from 'react'
import { NavLink } from 'react-router-dom'
import userIcon from '../images/user.png'


const User = ({user}) => {
  return (
    <div className='users__userCard'>
        <img src={userIcon} alt='user-icon'/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <NavLink className='secondaryBtn' key={user.id} to={user.id.toString()}>User Details</NavLink>
    </div>
  )
}

export default User