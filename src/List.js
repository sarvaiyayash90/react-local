import React from 'react';
import ListItem from './ListItem';

const List = props => {
  return (
    <ul>
      {props.items.map(item => (
        <ListItem id={item.id} key={item.id} name={item.name} />
      ))}
    </ul>
  );
};

export default List;
