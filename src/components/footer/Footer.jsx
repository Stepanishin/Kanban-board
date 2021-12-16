import React from 'react';
import './Footer.css';

const Footer = (props) => {
    const {tasks} = props

    let activeTasks = 0;

    for (let i = 0; i < tasks.length; i++) {
                if (tasks[i].status === "Backlog") {
                    activeTasks++
                }
            }

    let finishedTasks = 0;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status === "Finished") {
            finishedTasks++
        }
    }


    return (
        <footer className="footer">
            <div className="footer__tusksInfo">
                <p>Active tasks: {activeTasks}</p>
                <p>Finished tasks: {finishedTasks}</p>
            </div>
            <div>
                <p>Kanban board by Stepanishin</p>
            </div>
        </footer>
    );
};

export default Footer;