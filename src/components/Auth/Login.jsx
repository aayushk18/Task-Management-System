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


        <div className='flex h-screen w-screen items-center  bg-contain  justify-between'>
            <div className=' p-10 w-full text-7xl leading-20 justify-self-start text-center '>Task <br /> Management <br /> System</div>
            <div>
                <div className='  shadow-black shadow-2xl rounded-2xl'>
                    <form onSubmit={(e) => {
                        SubmitHandler(e);
                        // alert("form has been submitted!!!");
                    }} className='flex flex-col items-center bg-[rgb(40,40,40)] rounded-2xl justify-center p-15'>
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} required className='  bg-transparent placeholder-gray-400 inset-9 inset-shadow-black inset-shadow-sm rounded-2xl w-80 h-15 px-3 ' type="Email" placeholder=' Enter your Email' />
                        <input value={password} onChange={(e) => { setPassword(e.target.value) }} required className='  bg-transparent placeholder-gray-400 inset-2 inset-shadow-black inset-shadow-sm rounded-2xl w-80 h-15 px-3 mt-10 ' type="Password" placeholder=' Enter your Password' />
                        <button className='  bg-red-600 shadow-gray-900 font-semibold hover:translate-y-0.5 cursor-pointer hover:shadow-none shadow-md rounded-full w-80 h-15 mt-10'>Login</button>
                    </form>
                </div>
            </div>
            <div className='p-10 w-full justify-items-center '>
                <div className='p-10 w-full leading-20 text-7xl text-center'> Sign Up</div>
                <button className='h-15 rounded-xl cursor-pointer font-semibold text-xl w-40 bg-red-600'>Here</button>
            </div>



        </div>

    )
}

export default Login
