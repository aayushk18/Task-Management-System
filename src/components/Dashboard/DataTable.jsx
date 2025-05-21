import React, { useState } from 'react'
import TaskAdminDetail from '../Tasklist/TaskAdminDetail'

const DataTable = ({ Data }) => {
    const userData = Data
    console.log(Data[0].tasks)

    const [sliceValue, setSliceValue] = useState(3)
    const [expandValue, setExpandValue] = useState('See More')
    const [isExpand, setIsExpand] = useState(true)



    const setTableSize = (e) => {

        console.log("clicking...");

        e.preventDefault()
        if (isExpand) {
            setSliceValue(5)
            setExpandValue('See Less')

        } else {
            setSliceValue(3)
            setExpandValue('See More')

        }

        setIsExpand(!isExpand)


    }


    return (
       


        <div className='w-full'>
            <div className='m-10 sm:m-6 md:m-10 p-4 sm:p-6 md:p-10 shadow-2xl bg-[rgb(40,40,40)] shadow-black rounded-3xl'>

                <div className='hidden md:flex flex-row p-5 bg-red-600 shadow-inner shadow-black rounded-2xl mb-5'>
                    <div className='w-full font-bold text-center text-white'>Employee Name</div>
                    <div className='w-full font-bold text-center text-white'>New Task</div>
                    <div className='w-full font-bold text-center text-white'>Active Task</div>
                    <div className='w-full font-bold text-center text-white'>Completed</div>
                    <div className='w-full font-bold text-center text-white'>Failed</div>
                </div>


                <div className='space-y-4'>
                    {userData.slice(0, sliceValue).map((el) => (
                        <div
                            key={el.name}
                            className='md:hidden block inset-shadow-gray-950 inset-shadow-sm m-3 p-4 rounded-xl text-white shadow-lg'
                        >
                            <div className='mb-2'><strong>Employee Name:</strong> {el.name}</div>
                            <div className='mb-2'><strong>New Task:</strong> {el.taskCount.new_task}</div>
                            <div className='mb-2'><strong>Active Task:</strong> {el.taskCount.active}</div>
                            <div className='mb-2'><strong>Completed:</strong> {el.taskCount.completed}</div>
                            <div className='mb-2'><strong>Failed:</strong> {el.taskCount.failed}</div>
                        </div>
                    ))}


                    <div className='hidden md:block'>
                        {userData.slice(0, sliceValue).map((el) => (
                            <TaskAdminDetail key={el.name} el={el} />
                        ))}
                    </div>
                </div>



                <button type='button'
                    className='w-full text-center mt-6  relative z-30 cursor-pointer  hover:scale-110 ease-in-out transition duration-500'
                    onClick={(e) => setTableSize(e)} >
                    {expandValue}
                </button>

            </div>
        </div>
    )
}

export default DataTable
