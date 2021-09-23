import { useEffect, useState } from 'react';

export const useRecord = (initialColor = '#541812') => {
  const [current, setCurrent] = useState(initialColor);
  const [history, setHistory] = useState([initialColor]);
  const [index, setIndex] = useState(0);

  const record = (newColor) => {
    setHistory((prev) => [
      ...prev.slice(0, index + 1),
      newColor,
      ...prev.slice(index + 1),
    ]);
    setCurrent(newColor);
    console.log(history);
  };

  const undo = () => {
    setCurrent(history[index - 1]);
  };

  const redo = () => {};

  useEffect(() => {
    setIndex(history.indexOf(current));
  }, [current]);
  //     setHistory((prev) => [...prev, current]);
  //   }, [current]);

  return { undo, redo, current, record, history, index };
};
