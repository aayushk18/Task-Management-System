import React from 'react'
import Header from '../Tasklist/Header'
import DataTable from './DataTable'
import CreateTask from '../Tasklist/CreateTask'
import AllTask from '../Tasklist/AllTask'

const AdminDashboard = (props) => {



    const empData = props.data.employees
    console.log(empData)

    console.log(props.data)


    return (
        <div className='bg-contain bg-[url(./assets/bg4.jpg)]'>
            <Header changeUser={props.changeUser} data={props.data} />
            <CreateTask Data={empData} />
            <DataTable Data={empData} />
            <AllTask />
        </div>
    )
}

export default AdminDashboard