import React from 'react'

const TaskListNumber = ({ data }) => {

    console.log(data)


    return (
        <div className='mt-15 m-10 gap-5 flex flex-nowrap justify-center'>

            <div className='group w-[40%] p-8 rounded-xl bg-blue-600 '>
                <div className='text-4xl rounded-full shadow-2xl shadow-black w-20 h-20  content-center text-center mb-8 font-semibold' >{data.taskCount.new_task}</div>
                <div className=' text-3xl font-semibold'>New Task</div>
            </div>
            <div className='group w-[40%] p-8 rounded-xl bg-orange-600 '>
                <div className='text-4xl rounded-full shadow-2xl shadow-black w-20 h-20  content-center text-center mb-8 font-semibold' >{data.taskCount.active}</div>
                <div className='text-3xl font-semibold'>Accepted Task</div>
            </div>
            <div className='group w-[40%] p-8 rounded-xl bg-green-600 '>
                <div className='text-4xl rounded-full shadow-2xl shadow-black w-20 h-20  content-center text-center mb-8 font-semibold' >{data.taskCount.completed}</div>
                <div className=' text-3xl font-semibold'>Completed Task</div>
            </div>
            <div className='group w-[40%] p-8 rounded-xl bg-red-600'>
                <div className='text-4xl rounded-full shadow-2xl shadow-black w-20 h-20  content-center text-center mb-8 font-semibold' >{data.taskCount.failed}</div>
                <div className=' text-3xl font-semibold'>Failed Task</div>
            </div>

        </div>
    )
}

export default TaskListNumber