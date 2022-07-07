import React from 'react';
import apiData from './api';
import PersonInfo from './PersonInfo';
import { useQuery } from 'react-query';

function App() {
  const [data, setData] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const query = useQuery('contacts', apiData);

  console.log(query);

  //  TODO fetch contacts using apiData function, handle loading and error states

  return (
    <div className="App">
      <div className="selected">Selected contacts: {selected.length}</div>
      <div className="list">
        {data.map((personInfo) => (
          <PersonInfo key={personInfo.id} data={personInfo} />
        ))}
      </div>
    </div>
  );
}

export default App;
