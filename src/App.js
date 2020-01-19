import React, {useState} from 'react';
import HomePage from './HomePage.js';
import PageTwo from './PageTwo.js';


function App() {
  const [page, setpage] = useState(1);
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
}

export default App;
