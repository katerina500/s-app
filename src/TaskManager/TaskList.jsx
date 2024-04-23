import React from "react";

const TaskList = ({tasks}) => {
    return (
        <div style={{
            alignItems: "center",
        }}>
            <p>Task List</p>
            {tasks.map((task, index) => {
                return (
                    <div key={index} style = {{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        maxWidth: "200px",
                        margin: "0 auto",
                        border: "1px solid black",
                        padding: "20px",
                        width: "300px",
                    }}>
                        <p>Номер задачи - {index + 1}</p>
                        <p>Имя исполнителя - {task.name}</p>
                        <p>Фамилия исполнителя - {task.surname}</p>
                        <p>Отчество исполнителя - {task.lastname}</p>
                        <div>
                            <p>Описание задачи: </p>
                            {task.desc}
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default TaskList;