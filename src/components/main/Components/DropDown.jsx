import React from 'react';



const DropDown = (props) => {

    const {title, type, tasks, initialArray} = props

    return (

        // <ul  className={props.className}>
        <ul className="DropDownReady">
           {/* {props.tusk.map(item => <li status={item.status} id={item.id} key={item.id} onClick ={changeStatus}>{item.status == props.status ? item.title : ''}</li>)} */}
           {/* {props.initialArray.map(task => <li>{task.title}</li>)} */}
           {props.initialArray.map(task => <li>{task.status === 'Backlog' ? task.title : ''}</li>)}
           <li>1</li>
           <li>2</li>
           <li>3</li>
        </ul>

    );
};

export default DropDown;