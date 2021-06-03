import React, {useState} from 'react';

import './App.css';
import Data from './data'
import List from './List'


function App() {
  const [people,setPeople] = useState(Data)
  return (
    <div className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}></List>
      <button onClick={()=> setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;
