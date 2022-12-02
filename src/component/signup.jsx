import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../config/config'
import { useForm } from 'react-hook-form';




const Signup = () => {
    const [userexist, setUserExist] = useState(false)
    const [phoneexist, setPhoneExist] = useState(false)
    const token = localStorage.getItem('token')

    const navigate = useNavigate();
    const { register, unregister, handleSubmit, formState: { errors }, reset } = useForm();


    useEffect(() => {
        if (token) {
            navigate('/')
        }
    })

    const signUpHandler = async (data, e) => {
        e.preventDefault()



        const signUpData = {
            firstname: data.firstname,
            middlename: data.middlename,
            lastname: data.lastname,
            date: data.date,
            email: data.mail,
            phone: data.phone,
            password: data.password,
            occupation: data.occupation,
            company: data.company
        }


        await axios.post('http://localhost:4000/signup', signUpData).then((Response) => {

            if (Response.data.userexists) {
                setUserExist(true)

            } else if (Response.data.phoneexists) {
                setPhoneExist(true)

            } else {

                navigate('/login');
            }
        }).catch((err) => {
            console.log(err);
        })


        reset();

    }


    return (
        <div>

            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-white">
                <div className=" w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-violet-600/100  lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-violet-900  md:text  uppercase ">
                        Sign up
                    </h1>
                    <form className="mt-6" onSubmit={handleSubmit(signUpHandler)}>
                        <div className='flex'>
                            <div className="mb-2 mx-1">
                                <label
                                    for="email"
                                    className="block text-sm font-semibold text-white"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder='first name'

                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    {...register("firstname", {
                                        required: 'firstname is required',
                                        pattern: {
                                            value: /^[A-Za-z]+$/,
                                            message: 'Should only contain characters '

                                        }
                                    })}
                                />
                                {errors.firstname && (<small className='text-red-700'>{errors.firstname.message}</small>)}
                            </div>
                            <div className="mb-2 mx-1">
                                <label
                                    for="email"
                                    className="block text-sm font-semibold text-white"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder='middle name'
                                    name='middlename'

                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    {...register("middlename", {
                                        required: 'middlename is required'
                                    })}
                                />
                                {errors.middlename && (<small className='text-red-700'>{errors.middlename.message}</small>)}
                            </div>
                            <div className="mb-2 mx-1">
                                <label
                                    for="email"
                                    className="block text-sm font-semibold text-white"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder='last name'

                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    {...register("lastname", {
                                        required: 'lastname is required',
                                        pattern: {
                                            value: /^[A-Za-z]+$/,
                                            message: 'Should only contain characters '

                                        }
                                    })}
                                />
                                {errors.lastname && (<small className='text-red-700'>{errors.lastname.message}</small>)}
                            </div>
                        </div>



                        <div className='flex justify-around'>

                            <div className="mb-2">
                                <label
                                    for="email"
                                    className="block text-sm font-semibold text-white"
                                >
                                    Phone
                                </label>
                                <div className='flex'>
                                    <label
                                        for="email"
                                        className="block text-sm font-semibold text-black px-4 py-2 mt-2"
                                    >DOB</label>
                                    <input
                                        type="date"
                                        name='date'
                                        className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                        {...register("date", {
                                            required: 'date is required'
                                        })}
                                    /></div>
                                {errors.date && (<small className='text-red-700'>{errors.date.message}</small>)}



                            </div>
                            <div className="mb-2">
                                <label
                                    for="email"
                                    className="block text-sm font-semibold text-white"
                                >
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    placeholder='phone number'

                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    {...register("phone", {
                                        required: 'Phone number is required',
                                        pattern: {
                                            value: /^[6-9]\d{9}$/,
                                            message: 'invalid phone number'

                                        }
                                    })}
                                />
                                {errors.phone && (<small className='text-red-700'>{errors.phone.message}</small>)}


                            </div>
                        </div>




                        <div className='flex justify-around'>
                            <div className="mb-2">
                                <label
                                    for="email"
                                    className="block text-sm font-semibold text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="mail"
                                    placeholder='e-mail'
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    {...register("mail", {
                                        required: 'Email is required', pattern: {
                                            value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                                            message: 'Enter valid email'
                                        }
                                    })}
                                />
                                {errors.mail && (<small className='text-red-700'>{errors.mail.message}</small>)}



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
                                    placeholder='password'

                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    {...register("password", {
                                        required: 'Password  is required',
                                        pattern: {
                                            value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                            message: 'should have each character,digit & specialcharacter'

                                        }

                                    })}
                                />
                                {errors.password && (<small className='text-red-700'>{errors.password.message}</small>)}


                            </div>
                        </div>


                        <div className='flex justify-around'>
                            <div className="mb-2 mx-1">
                                <label
                                    for="email"
                                    className="block text-sm font-semibold text-white"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder='Company'

                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"

                                    {...register("company", {
                                        required: 'company is required'

                                    })}
                                />
                                {errors.company && (<small className='text-red-700'>{errors.company.message}</small>)}
                            </div>
                            <div className="mb-2 mx-1">
                                <label
                                    for="email"
                                    className="block text-sm font-semibold text-white"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder='Occupation'

                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"

                                    {...register("occupation", {
                                        required: 'occupation is required'

                                    })}
                                />
                                {errors.occupation && (<small className='text-red-700'>{errors.occupation.message}</small>)}
                            </div>
                        </div>

                        {userexist && <div className='text-red-700 text-center'> <p> user already exists</p></div>}
                        {phoneexist && <div className='text-red-700 text-center'> <p> phonenumber already exists</p></div>}







                        <div className="mt-6 items-center">
                            <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-violet-900  rounded-md hover:bg-violet-600  focus:outline-none focus:bg-purple-600">
                                Signup
                            </button>
                        </div>
                    </form>

                    <div className='text-center mt-2'> <a
                        onClick={() => {
                            navigate('/login');
                        }}
                        className="font-medium text-violet-900 hover:underline" style={{ cursor: "pointer" }}
                    >
                        Login
                    </a></div>
                </div>
            </div>


        </div>
    )
}

export default Signup