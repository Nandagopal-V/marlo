import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom'



const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='w-full bg-violet-900 h-16 flex justify-end items-center '>
                <p className='text-white cursor-pointer r mr-5' onClick={() => {

                    const isExecuted = window.confirm("You sure want to logout?")
                    if (isExecuted) {
                        localStorage.removeItem('token')

                        navigate('/login')

                    }

                }}>Logout</p>
            </div>
            <div className='w-full ml-[175px] px-2 ' >
                <Outlet />
            </div>
        </div>
    )
}

export default Home