import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import HeaderNavigation from '../Navigation/HeaderNavigation';
import FooterNavigation from '../Navigation/FooterNavigation';
export default function UserDetail() {
  const [userDetail,setUserDetail]=useState({});
  const [userPosts,setUserPosts]=useState([]);
  const [loading,setLoading]=useState(true)
  const [loadingPost,setLoadingPost]=useState(true)
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
    const param1 = queryParams.get('id');
  
  useEffect(() => {
 fetchUsersDetail();
 fetchUsersPosts();
 
  }, [])
  
  const fetchUsersDetail=async()=>{
    try{
      await axios.get('https://jsonplaceholder.typicode.com/users/'+param1).then((response)=>{
      setUserDetail(response.data);
      setLoading(false)
      console.log(response.data)
      })
        }catch(error){
          alert(error)
      
        }
  }

  const fetchUsersPosts=async()=>{
    try{
      await axios.get('https://jsonplaceholder.typicode.com/posts/').then((response)=>{
      setUserPosts(response.data);
      setLoadingPost(false)
      })
        }catch(error){
          alert(error)
      
        }
  }


  const addComment=()=>[
    alert("Comment Has Been Added")
  ]
  return (
    <div className="App">
      <HeaderNavigation></HeaderNavigation>
{!loading &&
      <div className='bg-white border-gray-200 dark:bg-gray-900 grid grid-cols-3 p-4'>
          <h1 className='text-black dark:text-white text-left text-2xl' >User Detail</h1>
      <div className='col-span-1 py-2'>
      <h6 className='text-black dark:text-white'>Name:{userDetail.name?userDetail.name:''}</h6>
      </div>
      <div className='col-span-1 py-2'>
      <h6 className='text-black dark:text-white'>Email:{userDetail.email?userDetail.email:''}</h6>
      </div>
      <div className='col-span-1 py-2'>
      <h6 className='text-black dark:text-white'>Username:{userDetail.username?userDetail.username:''}</h6>
      </div>
      <div className='col-span-1 py-2'>
      <h6 className='text-black dark:text-white'>Company:{userDetail.company.name?userDetail.company.name:''}</h6>
      </div>
      <div className='col-span-1 py-2'>
      <h6 className='text-black dark:text-white'>Phone:{userDetail.phone?userDetail.phone:''}</h6>
      </div>
<div>
  <h1 className='text-black dark:text-white text-left text-2xl' >User Posts</h1>
  </div>
      {!loadingPost&& userPosts.map((post)=>{
       return(
        <div className='bg-gray-900 border-gray-200 dark:bg-whit py-4 '>
        <p className='text-black text-left dark:text-white'> {post.id}</p>
        <h6 className='text-black text-left dark:text-white'>{post.title}</h6>
        <p className='text-black text-left dark:text-white'>{post.body}</p>
       <div class="flex flex-col justify-start">
       <label className='text-black dark:text-white text-left'>Add Comment</label>
        </div>
     <div class="flex gap-5 ">
     <input class="w-20 inline-block mr-4"></input>
     <button onClick={()=>{addComment()}} class="text-white">Add</button>
      </div>
        </div>

      
       )
      })}
        </div>}


<FooterNavigation></FooterNavigation>
      </div>
  )
}
