import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import postImage from '../images/post.png'

const PostDetails = () => {
    const {id}=useParams()
    const post=useLoaderData()
  return (
    <div className='posts__postDetails'>    
        <img src={postImage} alt='post'/>
        <div className='posts__postDetails__content'>
            <h2>{post.title.charAt(0).toUpperCase()+post.title.slice(1)}</h2>
            <p>{post.body}</p>
        </div>
    </div>
  )
}

export default PostDetails

export const postDEtailsLoader=async({params})=>{
    const {id}=params
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data=await res.json()
    return data
}