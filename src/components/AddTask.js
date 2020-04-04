import React, { Component } from 'react';
import './Addtask.css'


class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10);
    state = {
        text: "",
        date: this.minDate,
        important: false,

    }
    handleTextAdd = (e) => {
        this.setState({
            text: e.target.value
        })

    }
    handleCheckbox = () => {
        this.setState({
            important: !this.state.important
        })
    }
    handleDate = (e) => {
        this.setState({
            date: e.target.value,
        })
    }
    handleAppend = () => {
        const { text, date, important } = this.state;
        const add = this.props.add(text, date, important);
        if (add) {
            this.setState({
                text: "",
                date: this.minDate,
                important: false
            })
        };

    }

    render() {
        const { text, date, important } = this.state;
        return (
            <div className="taskadding">
                <h2>Add new task to list</h2>

                <input type="text" id="name" placeholder="your task..." value={text} onChange={this.handleTextAdd} />
                <label htmlFor="name"> type new task</label><span>
                    <input type="checkbox" id="checked" checked={important} onChange={this.handleCheckbox} />
                    <label htmlFor="checked">Is it important?</label></span>
                <br />
                <input type="date" min={this.minDate} max="2020-12-31" id="dateOfTask" value={date} onChange={this.handleDate} />
                <label htmlFor="dateOfTask">   Choose date to finish</label><br />
                <button onClick={this.handleAppend}>Add</button>

            </div>
        );
    }
}

export default AddTask;