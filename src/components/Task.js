import React from 'react';
import './Task.css';

const Task = (props) => {
    const time = new Date(props.task.finishDate).toLocaleString()
    const styleImp = {
        color: 'red',
    }
    // console.log(props.task.improtant);
    // console.log(props.task);
    return (
        <div className="singletask" style={props.task.important ? styleImp : null} >
            {props.text}, {props.date} <span>
                {!props.task.active && <span style={{ color: "red", }}> End at: {time}</span>}
                {props.task.active && <button className="complete" onClick={() => props.passive(props.task.id)}>Task completed</button>}
                <button onClick={() => props.remove(props.task.id)}>X</button></span>
        </div>
    )
}
export default Task