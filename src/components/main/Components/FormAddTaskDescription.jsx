import React from 'react';
import { useState } from 'react/cjs/react.development';

const FormAddTaskDescription = (props) => {

    const {tasks, setTasks, task} = props

    const [description, setDescription] = useState({
        description: '' ,
    })


    const handleChange = (e) => {
        const fieldName = e.target.name
        
        setDescription({...description, [fieldName]: e.target.value})
        
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const taskDetail__textarea = document.querySelector('.taskDetail__textarea')


        if (taskDetail__textarea.value) {

            taskDetail__textarea.value=""

            const index = tasks.map(e => e.title).indexOf(task.title);

            console.log(tasks)

            setTasks([...tasks, tasks[index].description += description.description])
            setDescription('')
        }

        
    }




    return (
        <form  
            className="TusksContainers__form" 
            onSubmit={handleSubmit}
        >
            <textarea 
                className='taskDetail__textarea'  
                id='taskDescription' 
                name='description' 
                placeholder='Add task description'
                value={description.description} 
                onChange={handleChange}
            />
            <button className="ButtonSubmit" type="submit">Submit</button>
        </form>
    );
};

export default FormAddTaskDescription;