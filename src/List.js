import React from 'react';
import ListItem from './ListItem';

const List = props => {
  return (
    <ul>
      {props.items.map(item => (
        <ListItem
          id={item.id}
          key={item.id}
          name={item.name}
          NewRemoveData={props.removeData}
        />
      ))}
    </ul>
  );
};

export default List;
