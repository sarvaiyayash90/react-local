import React from 'react';

const ListItem = props => {
  return (
    <>
      <li>{props.id}</li>
      <li>{props.name}</li>
    </>
  );
};

export default ListItem;
