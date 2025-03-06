import React, { useState } from 'react'
import TaskAdminDetail from '../Tasklist/TaskAdminDetail'

const DataTable = ({ Data }) => {
    const userData = Data
    console.log(Data[0].tasks)

    const [sliceValue, setSliceValue] = useState(3)

    const [expandValue, setExpandValue] = useState('See More')

    let isExpand = true



    const setTableSize = () => {
        if (isExpand) {
            setSliceValue(5)
            setExpandValue('See Less')
            isExpand = false
        } else {
            setSliceValue(3)
            setExpandValue('See More')
            isExpand = true
        }


    }


    return (
        <div className=' w-full '>
            <div className='m-10 p-10 shadow-2xl bg-[rgb(40,40,40)] shadow-black rounded-4xl'>
                {/* ---------------------- head -------------------------- */}

                <div className='flex flex-row  inset-shadow-sm p-5 bg-red-600 inset-shadow-black rounded-2xl m-5 py-8 '>
                    <div className='w-full font-bold text-center'>Employee Name</div>
                    <div className='w-full font-bold text-center'>New Task</div>
                    <div className='w-full font-bold text-center'>Active Task</div>
                    <div className='w-full font-bold text-center'>Completed</div>
                    <div className='w-full font-bold text-center'>Failed</div>
                </div>

                {/* --------------------- content-------------------------- */}
                <div className=' overflow-hidden  '>
                    {userData.slice(0, sliceValue).map((el) => {

                        return <TaskAdminDetail key={el.name} el={el} />



                    })}
                </div>
                <div className='w-full text-center cursor-pointer hover:scale-110 ease-in-out transition duration-500  text-amber-300 ' onClick={() => { setTableSize() }}>{expandValue}</div>

            </div>
        </div>
    )
}

export default DataTable