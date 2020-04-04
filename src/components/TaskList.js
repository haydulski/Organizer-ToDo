import React from 'react';
import './TaskList.css';
import Task from './Task';
const TaskList = (props) => {

    const list = props.tas.map(task => <Task key={task.id} text={task.text} date={task.date} />)

    return (
        <>{list}</>
    )
}

export default TaskList;