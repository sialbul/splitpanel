import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import YourComponent from '../src/components/splitpanel/index';

function App() {

const [screen, setScreen] = useState();

useEffect(()=>{

}, []);

function splitHandle(){
  setScreen(YourComponent)
}

function splitHandleBack(){
  setScreen(!YourComponent)
}
  return (
    <div className="App">
      Hello
      <button onClick={splitHandle}>Click me</button>
      <button onClick={splitHandleBack}>Click Back</button>

      <div className= "screen">
        {screen}
      </div>
     </div>
  );
}

export default App;