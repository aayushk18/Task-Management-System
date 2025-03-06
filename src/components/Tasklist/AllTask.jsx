import React from 'react'

const AllTask = () => {
    return (
        <div className='h-fit w-full'>
            <div className='mx-10 -translate-y-20 h-fit '>
                <div className=' flex flex-row bg-amber-500 shadow-2xl shadow-black ease-in-out transition duration-300 rounded-4xl p-15 translate-y-42 hover:translate-y-35 cursor-pointer'>
                    <div className='w-full text-center'>Aayush</div>
                    <div className='w-full text-center'>Ashish</div>
                    <div className='w-full text-center'>samay</div>
                </div>
                <div className='flex flex-row bg-amber-600 shadow-2xl shadow-black ease-in-out transition duration-300 rounded-4xl p-15 translate-y-28 hover:translate-y-21 cursor-pointer' >
                    <div className='w-full text-center'>Aayush</div>
                    <div className='w-full text-center'>Make Ui</div>
                    <div className='w-full text-center'>Status</div>
                </div>
                <div className='flex flex-row bg-amber-700 shadow-2xl shadow-black ease-in-out transition duration-300 rounded-4xl p-15 translate-y-14 hover:translate-y-7 cursor-pointer'>
                    <div className='w-full text-center'>Ashish</div>
                    <div className='w-full text-center'>Make Ui</div>
                    <div className='w-full text-center'>Status</div>
                </div>
                <div className='flex flex-row bg-amber-800 shadow-2xl shadow-black ease-in-out transition duration-300 rounded-4xl p-15 translate-y-0 cursor-pointer'>
                    <div className='w-full text-center'>samay</div>
                    <div className='w-full text-center'>Make Ui</div>
                    <div className='w-full text-center'>Status</div>
                </div>

            </div>

        </div>
    )
}

export default AllTask


