import React, {useState} from 'react';
import PageOne from './PageOne.js';


function App() {
  const [page, setPage] = useState(1);
  
  return (
    <PageOne pagestate={{page, setPage}}/>
  );
}

export default App;
