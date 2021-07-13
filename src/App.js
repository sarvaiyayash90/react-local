import React, { useState } from 'react';
import './style.css';
// import Myname, { NewApp, NewApp_new } from './NewApp';
import * as MYdata from './NewApp';
import List from './List';

import NewData from './NewData';

const allData = [
  {
    id: 'a1',
    name: 'sanket'
  },
  {
    id: 'a2',
    name: 'Kalpesh'
  },
  {
    id: 'a3',
    name: 'Nilesh'
  },
  {
    id: 'a4',
    name: 'Vishal'
  },
  {
    id: 'a5',
    name: 'Sachin'
  }
];

export default function App() {
  const [data, setdata] = useState(allData);

  const [newname, setname] = useState('yash');

  const setNameHandler = name => {
    // console.log('name is ', name);
    let namedata = newname;
    namedata === 'yash' ? setname(name) : setname('yash');
  };

  const remove = id => {
    const dd = data.filter(val => {
      val.id !== id;
    });
    setdata(dd);
  };

  return (
    <div>
      <MYdata.default />
      <MYdata.NewApp_new />
      <MYdata.NewApp />
      {MYdata.datadata}
      <List items={data} removeData={remove} />
      <NewData onAdddata={setNameHandler} />
      {newname}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
