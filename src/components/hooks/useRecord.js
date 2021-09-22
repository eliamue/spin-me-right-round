import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useRecord = (initialColor = 'red') => {
  const [current, useCurrent] = useState();
  const [record, useRecord] = useState();
  
  const undo = () => {

  };
    
  const redo = () => {

  };

  useEffect(() => {}, []);
  
  return { undo, redo, current, record };
};

