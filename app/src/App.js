import React, { useState } from 'react';
import logo from './logo.svg';
import Button from '@dswlerna/button';
import './App.css';
import Input from '@dswlerna/input';

function App() {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={() => alert(value)}>CLICK</Button>
        <Input onChange={(e) => setValue(e.target.value)} value={value} />
      </header>
    </div>
  );
}

export default App;
