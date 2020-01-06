import React from 'react';
import logo from './logo.svg';
import './App.css';
import YourComponent from '../src/components/splitpanel/index';

function App() {
  return (
    <div className="App">
      Hello
      <button>Click me</button>
     <div className="mainScreen">
        <YourComponent/>
     </div>
    </div>
  );
}

export default App;
