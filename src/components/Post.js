import React from 'react'
import { NavLink } from 'react-router-dom'

/*str.charAt(0).toUpperCase() + str.slice(1) */

const Post = ({post}) => { 
  return (
    <div className='posts__postCard'>
        <h2>{post.title.charAt(0).toUpperCase()+post.title.slice(1)}</h2>
        <NavLink className='secondaryBtn' key={post.id} to={post.id.toString()}>Details</NavLink>
    </div>
  )
}

export default Post