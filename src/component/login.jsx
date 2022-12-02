import React, { useState, useEffect } from 'react';
import axios from '../config/config'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const token = localStorage.getItem('token')
    const [islogindeclined, Setislogindeclined] = useState(false)



    useEffect(()=>{
        if(token){
            navigate('/')
        }
    })





    const submitHandler = async (e) => {
        e.preventDefault()
        const loginData = {
            email: email,
            password: password
        }

        await axios.post('http://localhost:4000/login', loginData).then((response) => {
            if (response.data.declined) {

                Setislogindeclined(true)

            } else {



                console.log(response.data.token);

                const { token } = response.data.token;
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("uId", response.data.uid);




                setEmail("")
                setPassword("")



                navigate('/')
            }



        }).catch((err => {
            console.log(err);
        }))
    }








    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-white ">
            <div className=" w-full p-6 m-auto bg-white rounded-md shadow-2xl shadow-violet-600/100  lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-violet-900 md:text  uppercase ">
                    Sign in
                </h1>
                <form className="mt-6" onSubmit={submitHandler}>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-white"
                        >
                            Email
                        </label>
                        <input type="email" onChange={(e) => { setEmail(e.target.value) }}
                            value={email}
                            placeholder='E-mail'
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder='Password'
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            value={password}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                 
                    {islogindeclined && <span className='text-red-600'>invalid credentials</span>}
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-violet-900 rounded-md hover:bg-violet-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>


                <div className='text-center mt-2'> <a
                    onClick={() => {
                        navigate('/signup');
                    }}
                    className="font-medium text-violet-900 hover:underline" style={{ cursor: "pointer" }}
                >
                    Sign up
                </a></div>

            </div>
        </div>
    )
}

export default Login
