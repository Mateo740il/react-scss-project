import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import User from '../components/User'

const Users = () => {
  const users=useLoaderData()
  const [searchUser,setSearchUser]=useState('')
  let filterUsers=users.filter(user=>((user.name).toLowerCase()).includes(searchUser.toLowerCase()))
  return (
    <>
      <input className='search' type='text' placeholder='search user ...' value={searchUser} onChange={e=>setSearchUser(e.target.value)} />
      <div className='users'>{filterUsers.map(user=>(
        <User key={user.id} user={user}/>
      ))}</div>
    </>
    
  )
}

export default Users

export const usersLoader=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/users')
  const data=await res.json()
  console.log(data);
  return data;
}