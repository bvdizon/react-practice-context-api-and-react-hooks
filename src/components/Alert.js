import React from 'react';
import { useBookContext } from '../context/book-context';

const Alert = () => {
  const { alert } = useBookContext();

  return (
    <div>
      <p>{alert.message}</p>
    </div>
  );
};

export default Alert;
