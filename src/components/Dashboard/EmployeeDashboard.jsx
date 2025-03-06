import React from 'react'
import Header from '../Tasklist/Header'
import TaskListNumber from '../Tasklist/TaskListNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = (props) => {
    console.log(props.data)





    return (
        <div className='h-screen w-screen bg-cover bg-[url(./assets/bg4.jpg)]'>
            <div >
                <Header data={props.data} changeUser={props.changeUser} />
                <TaskListNumber data={props.data} />
                <TaskList data={props.data} />
            </div>
        </div>
    )
}

export default EmployeeDashboard