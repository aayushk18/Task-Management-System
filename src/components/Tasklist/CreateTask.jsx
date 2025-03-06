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
        <div className='h-fit w-full p-10 '>
            <form onSubmit={(e) => { formFiller(e) }} className=' grid grid-cols-2 p-15 gap-15 shadow-2xl bg-[rgb(40,40,40)] rounded-4xl shadow-black'>
                <h2>Title <br /> <input value={task_title} onChange={(e) => { setTaskTitle(e.target.value) }} required type="text" placeholder='Title of your Task' className=' p-5  rounded-md  inset-shadow-gray-950 w-full  inset-shadow-sm placeholder: border-gray-200 ' /></h2>
                <h2>Date <br /><input value={task_date} onChange={(e) => { setTaskDate(e.target.value) }} required type='date' className=' p-5 rounded-md w-full  inset-shadow-gray-950   inset-shadow-sm placeholder: border-gray-200' /></h2>
                <h2 className='row-start-2 row-end-5 '>Discription <br /><textarea value={task_description} onChange={(e) => { setTaskDescription(e.target.value) }} required name="" id="description" placeholder='Desribe....' cols="30" rows="10" className='rounded-md p-5 h-fit w-full inset-shadow-gray-950  inset-shadow-sm placeholder: border-gray-200 ' ></textarea> </h2>

                <h2>Assign To <br /><div value={asignTo} onClick={() => { AssignToFunc() }} className='rounded-md relative w-full inset-shadow-gray-950   inset-shadow-sm placeholder: border-gray-200 ' >
                    <div id='assToMsg' style={{ display: 'block' }} className='p-5'>{toSetAssign}</div>
                    <div id='list' style={{ display: 'none' }} className=' overflow-scroll bg-[rgb(50,50,50)]  h-40 absolute  rounded-md shadow-gray-950 shadow-2xl '>

                        {Data.map((el) => {
                            return <div key={el.name || el.name + el.surname} className='p-5 cursor-pointer' onClick={() => { setToSetAssign(el.name + ' ' + el.surname); setAssignTo(el.name + ' ' + el.surname); }}>{el.name + ' ' + el.surname}</div>

                        })}

                    </div>
                </div>

                </h2>

                <h2>Category <br /><input value={category} onChange={(e) => { setCategory(e.target.value) }} required type="text" placeholder='Category' name="" id="" className=' w-full rounded-md p-5  inset-shadow-gray-950   inset-shadow-sm placeholder: border-gray-200' /></h2>
                <button type="submit" className=' p-3 bg-red-600 shadow-md   shadow-gray-900 hover:shadow-none hover:translate-y-0.5 w-full rounded-md cursor-pointer'>Create Task</button>
            </form>
        </div>
    )
}

export default CreateTask