import React from 'react'
import { Outlet } from 'react-router'

const PostLayout = () => {
  return (
    <div>
      <h2>Posts:</h2>
      <Outlet/>
    </div>
  )
}

export default PostLayout
