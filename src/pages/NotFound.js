import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h2>This page is not found 404</h2>
        <NavLink to='/' >Back Home</NavLink>
    </div>
  )
}

export default NotFound