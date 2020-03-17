import React from 'react';

const ListItem = (props) => {

    const handleThisDelete = e => {
        props.deleteCallback(props.id)
    }

    return (
        <div>
            <h4>Item: {props.item}</h4>
            <p>Priority: {props.priority}</p>
            <button onClick={handleThisDelete}>Delete</button>
        </div>
    );
}

export default ListItem;
