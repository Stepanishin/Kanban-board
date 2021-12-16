import React from 'react';
import { useState } from 'react/cjs/react.development';
// import MainStyle from '..//..//main/Main.css'

const FormAddNewTask = (props) => {

    const {addNewTask, setFormVisible } = props

    const [values, setValues] = useState({
        title: '' ,
    })

    const handleChange = (e) => {
        const fieldName = e.target.name
        setValues({...values, [fieldName]: e.target.value})
        // setValues(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.title) {

            const ButtonAdd = document.querySelector('.btnAddNewTusk')
            ButtonAdd.style.display = "block"

            addNewTask(values.title)
            setFormVisible()

        } 
        else {
            alert('Please write the name of the task')
        }
    }

    return (
        <form className="TusksContainers__form" onSubmit={handleSubmit}>
            <input  
                className="PlaceholderAdd" 
                type="text" 
                id="TaskTitle" 
                name="title" 
                type="text" 
                placeholder="Enter new task title" 
                value={values.title}
                onChange={handleChange}
            />
            <button className="ButtonSubmit" type="submit">Submit</button>
        </form>
    );
};

export default FormAddNewTask;