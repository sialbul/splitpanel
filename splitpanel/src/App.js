import React from 'react';
import logo from './logo.svg';
import './App.css';
import SplitPane from '../src/components/splitpanel/index';

function App() {
  return (
    <div className="App">
    <SplitPane>
      <SplitPane.Top />
      <SplitPane.Bottom />
    </SplitPane>
  </div>
  );
}

export default App;
