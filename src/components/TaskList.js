import React from 'react';
import './TaskList.css';
import Task from './Task';
const TaskList = (props) => {
    const activeTask = props.tas.filter(ta => ta.active === true);
    const passiveTask = props.tas.filter(ta => ta.active === false);

    const listActive = activeTask.map(task =>
        <Task passive={props.passive} remove={props.remove} key={task.id} text={task.text} date={task.date} task={task} />)
    const listPasive = passiveTask.map(task =>
        <Task passive={props.passive} remove={props.remove} key={task.id} text={task.text} date={task.date} task={task} />)

    return (
        <>

            <div className="active">
                {listActive}</div>
            <div className="passive">
                <h1>Done tasks ({passiveTask.length})</h1>
                <p>{passiveTask.length > 4 && <span>Five last tasks...</span>}</p>
                {listPasive.sort((a, b) => b.finshDate - a.finishDate).slice(0, 5)}
            </div>
        </>
    )
}

export default TaskList;