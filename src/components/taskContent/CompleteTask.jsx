import React from 'react'

const CompleteTask = ({ el }) => {
    return (
        <div className='group snap-start flex-shrink-0 ease-in-out transition duration-300 hover:scale-110 hover:shadow-black hover:shadow-2xl  overflow-hidden h-80 w-110 bg-green-600 p-5 rounded-2xl cursor-pointer'>
            <div className=' shadow-2xl group-hover:shadow-black group-hover:shadow-2xl p-2 rounded-xl flex flex-row justify-between'>
                <h2 className=' bg-red-700 font-semibold p-2 px-6 h-fit justify-center align-middle rounded-lg self-center'>{el.category}</h2>
                <div className=' justify-items-end'>
                    <h3 className=' group-hover:[text-shadow:_0_1px_1px_rgb(100_100_100_/_0.7)]'>{el.task_date}</h3>
                    <h4 className=' group-hover:[text-shadow:_0_1px_1px_rgb(100_100_100_/_0.7)]'>00:17</h4>
                </div>
            </div>
            <h1 className='  pt-5 text-3xl font-bold pb-3'>{el.task_title}</h1>
            <p>{el.task_description}</p>

        </div>
    )
}

export default CompleteTask