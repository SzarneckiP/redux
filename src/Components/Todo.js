import React from 'react';

const Todo = ({ text, complete, onClick }) => {
    return (
        <li
            style={{ textDecoration: complete ? 'line-through' : 'none', opacity: complete ? '0.4' : '1' }}
            onClick={onClick}
        >
            {text}
        </li>
    )
}

export default Todo;