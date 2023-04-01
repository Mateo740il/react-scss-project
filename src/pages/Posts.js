import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import Post from '../components/Post'

const Posts = () => {
  const posts=useLoaderData()
  const [searchPost,setSearchPost]=useState('')
  let filterPosts=posts.filter(post=>((post.title).toLowerCase()).includes(searchPost.toLowerCase()))
  return (
    <>  
      <input className='search' type='text' placeholder='search post ...' value={searchPost} onChange={(e)=>setSearchPost(e.target.value)}/>
      <div className='posts'>{filterPosts.map(post=>(
        <Post key={post.id} post={post}/>
      ))}</div>
    </>
    
  )
}

export default Posts

export const postLoader=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts')
  const data=await res.json()
  console.log(data);
  return data
}