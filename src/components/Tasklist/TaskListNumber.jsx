import React from 'react'

const TaskListNumber = ({ data }) => {

    console.log(data)


    return (
        <div className='grid grid-cols-2 lg:flex lg:flex-wrap  justify-center gap-6 m-10'>

            <div className='group w-full sm:w-[45%] lg:w-[22%] p-6 rounded-xl bg-blue-600'>
                <div className='text-4xl rounded-full shadow-2xl shadow-black w-20 h-20 flex items-center justify-center mb-6 font-semibold'>
                    {data.taskCount.new_task}
                </div>
                <div className='text-2xl font-semibold text-center'>New Task</div>
            </div>

            <div className='group w-full sm:w-[45%] lg:w-[22%] p-6 rounded-xl bg-orange-600'>
                <div className='text-4xl rounded-full shadow-2xl shadow-black w-20 h-20 flex items-center justify-center mb-6 font-semibold'>
                    {data.taskCount.active}
                </div>
                <div className='text-2xl font-semibold text-center'>Accepted Task</div>
            </div>

            <div className='group w-full sm:w-[45%] lg:w-[22%] p-6 rounded-xl bg-green-600'>
                <div className='text-4xl rounded-full shadow-2xl shadow-black w-20 h-20 flex items-center justify-center mb-6 font-semibold'>
                    {data.taskCount.completed}
                </div>
                <div className='text-2xl font-semibold text-center'>Completed Task</div>
            </div>

            <div className='group w-full sm:w-[45%] lg:w-[22%] p-6 rounded-xl bg-red-600'>
                <div className='text-4xl rounded-full shadow-2xl shadow-black w-20 h-20 flex items-center justify-center mb-6 font-semibold'>
                    {data.taskCount.failed}
                </div>
                <div className='text-2xl font-semibold text-center'>Failed Task</div>
            </div>

        </div>
    )
}

export default TaskListNumber
