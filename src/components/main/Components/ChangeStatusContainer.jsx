import React from 'react';
import { TusksContainers_Type } from '..//..//..//config'

const ChangeStatusContainer = ({children, ...props}) => {

    const {title, type, tasks, initialArray, setTasks} = props



    const openDropDownReady = (e) => {
        e.preventDefault()
        let newTasksList = document.querySelector('.DropDownReady')

        newTasksList.style.display = "block"
    }

    const openDropDownInProgress = (e) => {
        e.preventDefault()
        let newTasksList = document.querySelector('.DropDownInProgress')

        newTasksList.style.display = "block"
    }

    const openDropDownFinished = (e) => {
        e.preventDefault()
        let newTasksList = document.querySelector('.DropDownFinished')

        newTasksList.style.display = "block"
    }

    const changeStatusBacklog = (task) => {
        const updatedTask = initialArray.map(element => {
            if (task.target.id == element.id) {
                initialArray.push(element);
                return {...element, status: 'Ready',}  
            }
            return element
        })


        let newTasksList = document.querySelector('.DropDownReady')
        newTasksList.style.display = "none"

        setTasks(updatedTask)
    }

    const changeStatusReady = (task) => {
        initialArray.forEach(element => {
            if (task.target.id == element.id) {
                element.status = 'InProgress'              
            }
        })  

        let newTasksList = document.querySelector('.DropDownInProgress')
        newTasksList.style.display = "none"

        setTasks([...initialArray])
        console.log(initialArray)
    }

    const changeStatusInProgress = (task) => {
        initialArray.forEach(element => {
            if (task.target.id == element.id) {
                element.status = 'Finished'              
            }
        })  

        let newTasksList = document.querySelector('.DropDownFinished')
        newTasksList.style.display = "none"

        setTasks([...initialArray])
        console.log(TusksContainers_Type)
    }

    return (
        <div>

            {type === TusksContainers_Type.Ready && (
                <div>
                    <button {...props} onClick={openDropDownReady}>{children}</button>
                    <ul className="DropDownReady" onClick={changeStatusBacklog}>
                        {props.initialArray.map(task => <li status={task.status} key={task.id} id={task.id}>{task.status === 'Backlog' ? task.title : ''}</li>)}
                    </ul>
                </div>

            )}

            {type === TusksContainers_Type.In_progress && (
                <div>
                    <button {...props} onClick={openDropDownInProgress}>{children}</button>
                    <ul className="DropDownInProgress" onClick={changeStatusReady}>
                        {props.initialArray.map(task => <li status={task.status} key={task.id} id={task.id}>{task.status === 'Ready' ? task.title : ''}</li>)}
                    </ul>                    
                </div>

            )}

            {type === TusksContainers_Type.Finished && (
                <div>
                    <button {...props} onClick={openDropDownFinished}>{children}</button>
                    <ul className="DropDownFinished" onClick={changeStatusInProgress}>
                        {props.initialArray.map(task => <li status={task.status} key={task.id} id={task.id}>{task.status === 'InProgress' ? task.title : ''}</li>)}
                    </ul>
                </div>

            )}





        </div>

    );
};

export default ChangeStatusContainer;