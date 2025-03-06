import React from 'react'

const TaskAdminDetail = ({ el }) => {
    console.log(el)
    return (
        <div className='flex flex-row  inset-shadow-sm p-5  inset-shadow-black rounded-2xl m-5 '>
            <div className=' w-full text-center'>{el.name + ' ' + el.surname}</div>
            <div className=' w-full text-center'>{el.taskCount.new_task}</div>
            <div className=' w-full text-center'>{el.taskCount.active}</div>
            <div className=' w-full text-center'>{el.taskCount.completed}</div>
            <div className=' w-full text-center'>{el.taskCount.failed}</div>
        </div>
    )
}

export default TaskAdminDetail