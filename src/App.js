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
  const [data, setdata] = useState([]);

  const [newname, setname] = useState('yash');

  const setNameHandler = name => {
    // console.log('name is ', name);
    let namedata = newname;
    namedata === 'yash' ? setname(name) : setname('yash');
  };

  const remove = id => {
    const dd = data.filter(val => {
      return val.id !== id;
    });
    setdata(dd);
  };

  const fetchData = async () => {
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    const newData = data.results.map(item => {
      return {
        id: item.episode_id,
        title: item.title,
        openingText: item.opening_crawl,
        releaseDate: item.release_date
      };
    });
    // console.log('dassasas', newData);
    setdata(newData);
  };

  return (
    <div>
      <MYdata.default />
      <MYdata.NewApp_new />
      <MYdata.NewApp />
      {MYdata.datadata}
      <List items={data} removeData={remove} />
      <NewData onAdddata={setNameHandler} />
      &nbsp;&nbsp;{newname}
      <br />
      <br />
      <button onClick={() => fetchData()}>fetch data</button>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
