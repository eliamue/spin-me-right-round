import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useRecord = (initialColor = '04FF23') => {
  const [current, useCurrent] = useState(initialColor);
  const [history] = useState([]);
  const record = () => {

  };
  
  const undo = () => {

  };
    
  const redo = () => {

  };

  useEffect(() => {
    history.push(current);
    console.log('-----history-----', history);
  }, []);

  return { undo, redo, current, record };
};

