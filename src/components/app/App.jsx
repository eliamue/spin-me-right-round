import React from 'react';
import { useRecord } from '../hooks/useRecord';
import styles from './App.css';

function App() {
  const { current, undo, redo, record, isDisabled } = useRecord('#541812');

  // const isOnInitialColor = index === 0;

  // const isOnLastColor = index === history.length;

  return (
    <>
      <button
        onClick={undo}
        role="unbutton"
        aria-label="undo-button"
        disabled={isDisabled}
        className={styles.undo}
      >
        undo
      </button>

      <button
        onClick={redo}
        role="rebutton"
        aria-label="redo-button"
        disabled={isDisabled}
        className={styles.redo}
      >
        redo
      </button>

      <input
        role="color"
        aria-label="color-input"
        type="color"
        value={current}
        onChange={({ target }) => record(target.value)}
      />

      <div
        role="display"
        aria-label="swatch"
        style={{
          backgroundColor: current,
          width: '10rem',
          height: '10rem',
        }}
      ></div>
    </>
  );
}

export default App;
