import React from 'react';
import ListItem from './ListItem';

const List = ({items}) => {

    const listItems = () => {
        return items.map(item => (
            <ListItem 
                item={item.item}
                priority={item.priority}
                key={item.id}
                id={item.id}
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
