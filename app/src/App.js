import React,{useState} from 'react';
import './App.css';
import ChildCompOne from './ChildCompOne';
import ChildCompTwo from './ChildCompTwo';

function App() {
  
  const [somestate, setsomestate] = useState("i am a state from comp one")
  
  return (
    <div className="App">
     <h1>learning react hook  -  app.js</h1> <br/>
     <h5>{somestate}</h5>
     
     <hr></hr>
     <ChildCompOne somestate={somestate}/>
     <ChildCompTwo somestate={somestate}/>
     
    </div>
  );
}

export default App;
