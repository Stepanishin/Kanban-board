import React from 'react';
import { Link } from 'react-router-dom';
import FormAddTaskDescription from './FormAddTaskDescription';


const TaskDetail = (props) => {

    // const match = useMatch('/tasks/:taskId')
    // const {taskId} = match.params
    
    const {tasks, setTasks} = props

    let pageUrl = window.location.href;
    const pageID = pageUrl.split ("/") [4]

    const task = tasks.find(task => task.id == pageID)




    return (
        <div  className="TaskDetail__wrap">
            <div>
                <div className='TaskDetail__container-title'>
                    <h2 className='TaskDetail__title'>{task.title}</h2>
                    <Link to="/">
                        <img src="/img/closeWindow.svg" alt="close this page" width='23px' height='23px'/>
                    </Link>
                </div>

                {}


                <p className='TaskDetail__description'>{task.description}</p>
                <FormAddTaskDescription tasks={tasks} setTasks={setTasks} pageID={pageID} task={task}/>
                
            </div>
        </div>
    );
};

export default TaskDetail;