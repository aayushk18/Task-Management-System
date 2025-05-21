import React, { useEffect, useState } from 'react'

const CreateTask = () => {


    const [task_title, setTaskTitle] = useState('')
    const [task_date, setTaskDate] = useState('')
    const [task_description, setTaskDescription] = useState('')
    const [asignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [task, setTask] = useState({})

    const Data = JSON.parse(localStorage.getItem('employees'));


    const formFiller = (e) => {

        e.preventDefault();




        setTask({ task_title, task_date, task_description, category, new_task: true, completed: false, failed: false, active: false })



        Data.forEach(element => {
            if (asignTo == element.name + ' ' + element.surname) {
                console.log('working')
                element.taskCount.new_task = element.taskCount.new_task + 1;
                element.tasks.push(task)
                console.log(element)
            } else console.log('not working')

        });

        console.log(task);
        console.log(Data)

        setTaskTitle('')
        setTaskDate('')
        setTaskDescription('')
        setAssignTo('')
        setCategory('')

    }
    let isListOpen = false

    const [toSetAssign, setToSetAssign] = useState('Assign To...')


    const AssignToFunc = () => {

        if (isListOpen) {

            document.getElementById('list').style.display = 'inline-block';


            isListOpen = false
        } else {
            document.getElementById('list').style.display = 'none';

            isListOpen = true
        }







    }







    return (
       
        <div className='h-fit w-full  sm:mb-10'>
            <form
                onSubmit={(e) => formFiller(e)}
                className='grid grid-cols-1 m-10 md:grid-cols-2 gap-6 sm:gap-8 p-6 md:p-10 shadow-2xl bg-[rgb(40,40,40)] rounded-3xl shadow-black'
            >
               
                <div>
                    <label className='block text-white mb-2'>Title</label>
                    <input
                        value={task_title}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        required
                        type="text"
                        placeholder='Title of your Task'
                        className='p-4 rounded-md w-full  text-white placeholder-gray-400   inset-shadow-gray-950 inset-shadow-sm '
                    />
                </div>

               
                <div>
                    <label className='block text-white mb-2'>Date</label>
                    <input
                        value={task_date}
                        onChange={(e) => setTaskDate(e.target.value)}
                        required
                        type="date"
                        className='p-4 rounded-md w-full  text-white placeholder-gray-400  inset-shadow-gray-950 inset-shadow-sm '
                    />
                </div>

              
                <div className='md:col-span-2'>
                    <label className='block text-white mb-2'>Description</label>
                    <textarea
                        value={task_description}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        required
                        placeholder='Describe your task...'
                        rows="6"
                        className='p-4 rounded-md w-full  text-white placeholder-gray-400  inset-shadow-gray-950 inset-shadow-sm '
                    />
                </div>

               
                <div>
                    <label className='block text-white mb-2'>Assign To</label>
                    <div
                        onClick={() => AssignToFunc()}
                        className='relative p-4 rounded-md w-full text-white inset-shadow-gray-950 inset-shadow-sm  cursor-pointer'
                    >
                        <div id='assToMsg'>{toSetAssign}</div>
                        <div
                            id='list'
                            style={{ display: 'none' }}
                            className='overflow-y-auto bg-[rgb(50,50,50)] h-40 absolute w-full mt-2 rounded-md shadow-2xl z-10'
                        >
                            {Data.map((el) => (
                                <div
                                    key={el.name + el.surname}
                                    className='p-3 hover:bg-gray-700 cursor-pointer'
                                    onClick={() => {
                                        setToSetAssign(el.name + ' ' + el.surname);
                                        setAssignTo(el.name + ' ' + el.surname);
                                    }}
                                >
                                    {el.name + ' ' + el.surname}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

              
                <div>
                    <label className='block text-white mb-2'>Category</label>
                    <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        type="text"
                        placeholder='Category'
                        className='p-4 rounded-md w-full text-white placeholder-gray-400  inset-shadow-gray-950 inset-shadow-sm '
                    />
                </div>

           
                <div className='md:col-span-2'>
                    <button
                        type="submit"
                        className='p-4 bg-red-600 text-white font-semibold shadow-md shadow-gray-900 hover:shadow-none hover:translate-y-0.5 w-full rounded-md transition-all duration-150'
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>


    )
}

export default CreateTask
