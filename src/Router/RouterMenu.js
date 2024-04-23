import React from "react";
import {Routes, Route } from "react-router-dom";
import TaskManager from "../TaskManager/TaskManager";

const RouterMenu = () => {
    return (
        <Routes>
            <Route path="/home" element={null}></Route>
            <Route path="/tasks" element={<TaskManager/>} />
        </Routes>
    )
;}

export default RouterMenu;