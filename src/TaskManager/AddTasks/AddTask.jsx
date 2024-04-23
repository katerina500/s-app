import React from "react";
import LessInput from "../../shared/StateLessInputs/LessInput";
import './AddTask.css';
import FullInput from "../../shared/StateFullinputs/FullInput";

const AddTasks = ({onClose, onAdd, setTask}) => {

    const addNameForOnChangeInput = (text) => {
        console.log(text);
    }
    return (
        <div className="add-tasks-container">
            <form className="add-tasks-container__form__add-task-form" onSubmit={(e) => {
                e.preventDefault();
                console.log(e);
                onAdd(e.target);
            }}>
                <div className="add-task-form__maintainer">
                    <p className="label">Исполнитель</p>
                    <div className="maintainer-info-container">
                    <LessInput placeholder="Ваше имя" type='text' name={'name'} onChangeProps={addNameForOnChangeInput} classes='maintainer-item'/>
                    <LessInput placeholder="Ваша Фамилия" type='text' name={'surname'} onChangeProps={addNameForOnChangeInput} classes='maintainer-item'/>
                    <LessInput placeholder="Ваше Отчество" type='text' name={'lastname'} onChangeProps={addNameForOnChangeInput} classes='maintainer-item'/>
                    </div>
                </div>
                <div>
                    <p className="label">Введите дату рождения</p>
                    <FullInput name={'date'} localType='date' />
                </div>
                <div>
                    <p className="label">Описание задачи</p>
                    <FullInput name={'desc'} localType='text-area' placeholder='Введите описание задачи' />
                </div>
                <button className="btn form-btn" onClick={() => onAdd()}>Добавить</button>
                <button className="btn form-btn" onClick={() => onClose()}>Отмена</button>
            </form>
        </div>
    )
};

export default AddTasks;