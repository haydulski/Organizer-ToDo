import React, { Component } from 'react';
class AddTask extends Component {
    state = {
        task: {
            id: "0",
            name: "",
            date: "",
            improtant: false,
            active: true
        }
    }
    render() {
        return (
            <>
                <form>
                    <input type="text" id="name" />
                    <label htmlFor="name">Add new task</label>
                </form>
            </>
        );
    }
}

export default AddTask;