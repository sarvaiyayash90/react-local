import React from 'react';

const ListItem = props => {
  const remove = id => {
    // console.log('id' + id);
    props.NewRemoveData(id);
  };

  return (
    <>
      <li style={{ listStyle: 'none' }}>
        Id : {props.id}
        <br />
        Name : {props.name}&nbsp;&nbsp;
        <button onClick={() => remove(props.id)}>delete</button>
        <hr />
      </li>
    </>
  );
};

export default ListItem;
