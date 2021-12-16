import React from 'react';
import { TusksContainers_Type, TusksContainers_Title } from '..//..//../config'
import List from './List';

const Board = (props) => {

    const {tasks, setTasks} = props

    const addNewTask = (title) => {
    const newTask = {
            id:Date.now(),
            title: title,
            status: TusksContainers_Type.Backlog,
            description: ''
        }
    setTasks([...tasks, newTask])
    }

    return (
        <div className="TusksContainers__wrap">
            {Object.values(TusksContainers_Type).map(type => {
                const listTasks = tasks.filter(task => task.status === type)
                return (
                    <List 
                        key={type} 
                        title={TusksContainers_Title[type]} 
                        type={type} 
                        tasks={listTasks} 
                        initialArray={tasks} 
                        addNewTask={addNewTask} 
                        setTasks={setTasks} 
                    />
                )
            })}
        </div>
    );
};

export default Board;