import React, { useState } from 'react';
import Button from '@dswlerna/button';
import Input from '@dswlerna/input';
import { H1 } from '@dswlerna/typography';
import './App.css';

function App() {
  const [value, setValue] = useState('this is an input!!');
  return (
    <div className="App">
      <header className="App-header">
        <H1>Design Systems with Lerna</H1>
        <Button onClick={() => alert(value)} outline primary>
          CLICK
        </Button>
        <Input onChange={(e) => setValue(e.target.value)} value={value} />
      </header>
    </div>
  );
}

export default App;
