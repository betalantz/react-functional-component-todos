import React from 'react';

const ListItem = (props) => {
    return (
        <div>
            <h4>Item: {props.item}</h4>
            <p>Priority: {props.priority}</p>
        </div>
    );
}

export default ListItem;
