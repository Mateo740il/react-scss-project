import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import personImage from '../images/person.png'

const UserDetail = () => {
    const {id}=useParams()
    const user=useLoaderData()
  return (
    <>
        <div key={user.id} className='users__userDetails'>
            <img src={personImage} alt='person-illustration'/>
            <h2>{user.name}</h2>
            <p><b>City:</b> {user.address.city}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Company:</b> {user.company.name}</p>
            <p><b>Webiste:</b> {user.website}</p>
        </div>
    </>
  )
}

export default UserDetail

export const userDetailsLoader=async({params})=>{
    const {id} = params
    const res=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data=await res.json()
    console.log(data);
    return data
}