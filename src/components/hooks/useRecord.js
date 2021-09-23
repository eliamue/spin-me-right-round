import { useEffect, useState } from 'react';

export const useRecord = (initialColor = 'red') => {
  const [current, setCurrent] = useState(initialColor);
  const [history, setHistory] = useState([]);
  const record = (newColor) => {
    setCurrent(newColor);
  };
  
  const undo = () => {

  };
    
  const redo = () => {

  };

  useEffect(() => {
    setHistory((prev) => [...prev, current]);
    console.log('-----history-----', history);
  }, [current]);

  return { undo, redo, current, record };
};

