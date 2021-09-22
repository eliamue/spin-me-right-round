import React from 'react';
import { useRecord } from '../hooks/useRecord';

function App() {
  const { current, undo, redo, record } = useRecord('04FF23');
console.log('-----current-----', current);  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input type="color" value={current} onChange={({ target }) => record(target.value)} />
      <div style={{ backgroundColor: current, width: '10rem', height: '10rem' }}></div>
    </>
  );
}

export default App;
