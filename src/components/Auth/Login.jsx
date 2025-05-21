import React, { createContext, useContext, useState } from 'react'



const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const SubmitHandler = (e) => {
        e.preventDefault();
        // alert("email is " + email);
        console.log("email is " + email);
        handleLogin(email, password)
        // console.log(email);
        setEmail("");
        setPassword("");
    }

    return (
<div className="min-h-screen w-full flex flex-col justify-center items-center bg-cover p-5">
            <div className="flex flex-col lg:flex-row justify-around  items-center w-full max-w-8xl">


                <div className="w-full text-center lg:text-left mb-10 lg:mb-0 p-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Task <br /> Management <br /> System
                    </div>
                </div>


                <div className="w-full max-w-md mb-10 lg:mb-0 p-4">
                    <div className="shadow-black shadow-2xl rounded-2xl">
                        <form
                            onSubmit={(e) => {
                                SubmitHandler(e);
                            }}
                            className="flex flex-col items-center bg-[rgb(40,40,40)] rounded-2xl p-8"
                        >
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                type="email"
                                placeholder="Enter your Email"
                                className="bg-transparent text-white placeholder-gray-400 shadow-inner shadow-black rounded-xl w-full h-12 px-4 mb-6"
                            />
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                type="password"
                                placeholder="Enter your Password"
                                className="bg-transparent text-white placeholder-gray-400 shadow-inner shadow-black rounded-xl w-full h-12 px-4 mb-6"
                            />
                            <button
                                type="submit"
                                className="bg-red-600 text-white font-semibold hover:translate-y-0.5 hover:shadow-none shadow-md shadow-gray-900 rounded-full w-full h-12 mt-4"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>


                <div className="w-full text-center lg:justify-items-center lg:content-center lg:text-left p-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                        Sign Up
                    </div>
                    <button className="h-12 w-32 bg-red-600  text-white text-xl font-semibold rounded-xl">
                        Here
                    </button>
                </div>
            </div>
        </div>


    )
}

export default Login
