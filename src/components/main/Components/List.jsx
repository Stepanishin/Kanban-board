import React from 'react';
import { useState } from 'react/cjs/react.development';
import { TusksContainers_Type } from '..//..//../config'
import ChangeStatusContainer from './ChangeStatusContainer';
import FormAddNewTask from './FormAddNewTask';
import { Link } from 'react-router-dom';

const List = (props) => {
    const {title, type, tasks, addNewTask, initialArray, setTasks} = props

    const [isFormVisible, setFormVisible] = useState(false)
    const [isButtonAdd, setButtonAdd] = useState(true)

    const addButtonSubmit = () => {

        const ButtonAdd = document.querySelector('.btnAddNewTusk')
        ButtonAdd.style.display = "none"

        setFormVisible(!isFormVisible)
    }

    return (
        <div className="TusksContainers__List">
  
            <h3>{title}</h3>

            {tasks.map(tusk => {
                return (
                    <Link key="tusk.id" to={`/tasks/${tusk.id}`}>
                        <div key="tusk.id" className="TusksContainers__Card-item">{tusk.title}</div>
                    </Link>
                )
            })}

            {type === TusksContainers_Type.Backlog && isButtonAdd && (
                <button className="ButtonAdd btnAddNewTusk" onClick={addButtonSubmit}>+ Add card</button>
            )}

            {type === TusksContainers_Type.Backlog && isFormVisible && (
                <FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} setButtonAdd={setButtonAdd} />
            )}

            {type === TusksContainers_Type.Ready && isButtonAdd && (
                <ChangeStatusContainer  
                    className="ButtonAdd" 
                    tasks={tasks} 
                    type={type} 
                    title={title} 
                    initialArray={initialArray} 
                    setTasks={setTasks}
                    >+ Add card</ChangeStatusContainer>
            )}

            {type === TusksContainers_Type.In_progress && isButtonAdd && (
                <ChangeStatusContainer  
                    className="ButtonAdd" 
                    tasks={tasks} 
                    type={type} 
                    title={title} 
                    initialArray={initialArray} 
                    setTasks={setTasks}
                    >+ Add card</ChangeStatusContainer>
            )}

            {type === TusksContainers_Type.Finished && isButtonAdd && (
                <ChangeStatusContainer  
                    className="ButtonAdd" 
                    tasks={tasks} 
                    type={type} 
                    title={title} 
                    initialArray={initialArray} 
                    setTasks={setTasks}
                    >+ Add card</ChangeStatusContainer>
            )}

        </div>
    );
};

export default List;