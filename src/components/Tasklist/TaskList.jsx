import React from 'react'
import AcceptTask from '../taskContent/AcceptTask'
import CompleteTask from '../taskContent/CompleteTask'
import FailedTask from '../taskContent/FailedTask'
import NewTask from '../taskContent/NewTask'

const TaskList = ({ data }) => {


    console.log(data.tasks[0])
    return (

        <div id='tasklist' className='pt-5 pb-5  overflow-y-visible overflow-x-scroll  snap-x scroll-pl-0 scroll-pr-0 scroll-smooth  h-full  m-10 flex flex-row gap-5  flex-nowrap   align-middle '>

            {data.tasks.map((el) => {
                if (el.active) {
                    return <AcceptTask key={el.category} el={el} />
                }
                if (el.completed) {
                    return <CompleteTask key={el.category} el={el} />
                }
                if (el.failed) {
                    return <FailedTask key={el.category} el={el} />
                }
                if (el.new_task) {
                    return <NewTask key={el.category} el={el} />
                }

            })}



        </div>




    )
}

export default TaskList