import React from 'react';
import Board from './Components/Board';
import './Main.css'
import { Route, Routes } from 'react-router-dom'
import TaskDetail from './Components/TaskDetail';

const Main = (props) => {

    return (
        <main className="Main">

                <Routes>
                    <Route path={'/'}  element={<Board {...props} />} />
                    <Route path={'/tasks/:taskId'}  element={<TaskDetail {...props} />} />
                </Routes>

 
        </main>
    );
};

export default Main;