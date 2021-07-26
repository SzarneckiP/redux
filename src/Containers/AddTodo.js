import React from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../Actions/Todo.actions';

const AddTodo = ({ addTodo }) => {
    let input;

    const handleSubmit = (e) => {
        const value = input.value.trim();
        addTodo(value);
    }

    return (
        <div>
            <input
                style={{ fontSize: 16, background: "#2f3542", color: "white", margin: 10, borderBottomColor: "white", borderRight: 0, borderRadius: 2, borderTop: 0, borderLeft: 0 }}
                type='text' ref={node => (input = node)} />
            <button
                style={{ borderRadius: 5, width: 100, height: 35, fontFamily: "arial", fontSize: 15, cursor: 'pointer', background: '#95a5a6', color: 'white', margin: 9 }}
                type='submit' onClick={handleSubmit}>
                Add task
            </button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addTodo: (text) => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(AddTodo);