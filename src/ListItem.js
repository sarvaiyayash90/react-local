import React from 'react';

const ListItem = props => {
  return (
    <>
      <li style={{ listStyle: 'none' }}>
        Id : {props.id}
        <br />
        Name : {props.name}&nbsp;&nbsp;
        <button onClick={props.id}>delete</button>
        <hr />
      </li>
    </>
  );
};

export default ListItem;
