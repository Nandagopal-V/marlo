import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const Privaterouteauser = () => {
    let auth = localStorage.getItem('token')
    console.log(auth);
  return (
      auth ?   <Outlet/> : <Navigate to='/login'/>
    )
}

export default Privaterouteauser
