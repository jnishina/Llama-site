import React, {useState, useEffect} from 'react';
import HomePage from './HomePage.js';
import PageTwo from './PageTwo.js';
import LlamaCatalog from './LlamaCatalog.js';


function App() {
  const [page, setpage] = useState(1);
  const [data, setData] = useState({});
  const llamas = Object.values(data);
  useEffect(() => {
    const fetchLlamas = async () => {
      const response = await fetch('./data/llamas.json');
      const json = await response.json();
      setData(json);
    };
    fetchLlamas();
  }, []);

  const homePageSwitch = () => {
    setpage(1);
  }
  const aboutPageSwitch = () => {
    setpage(2);
  }
  const llamaPageSwitch = () => {
    setpage(3);
  }
  
  if (page === 1) {
    return (
      <HomePage pageswitch={{homePageSwitch, aboutPageSwitch, llamaPageSwitch}}/>
    );
  }
  else if (page === 2) {
    return (
      <PageTwo/>
    )
  }
  else if (page === 3) {
    return (
      <LlamaCatalog pageswitch={{homePageSwitch, aboutPageSwitch, llamaPageSwitch}} llamas={llamas}/>
    )
  }
}

export default App;
