import React from 'react';
import ListItem from './ListItem';

const List = ({items, handleDelete}) => {

    const listItems = () => {
        return items.map(item => (
            <ListItem 
                item={item.item}
                priority={item.priority}
                key={item.id}
                id={item.id}
                deleteCallback={handleDelete}
            />
        ))

    }

    return (
        <div>
            {listItems()}
        </div>
    );
}

export default List;
