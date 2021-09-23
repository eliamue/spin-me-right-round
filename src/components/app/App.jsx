import React from 'react';
import { useRecord } from '../hooks/useRecord';

function App() {
  const { current, undo, redo, record } = useRecord('#123456');
  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input role="color" aria-label="color-input" type="color" value={current} onChange={({ target }) => record(target.value)} />
      <div role="display" aria-label="swatch" style={{ backgroundColor: current, width: '10rem', height: '10rem' }}></div>
    </>
  );
}

export default App;
