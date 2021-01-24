import React, { useContext } from 'react';
import { BookContext } from '../context/book-context';

const Book = ({ id, title, author, img }) => {
  const { dispatch } = useContext(BookContext);

  const handleEdit = () => {
    const editBook = {
      id,
      title,
      author,
    };
    dispatch({ type: 'ADD', payload: editBook });
  };

  return (
    <div>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <button
        className='btn'
        onClick={() => dispatch({ type: 'DELETE', id: id })}>
        Delete Book
      </button>
      <button onClick={handleEdit}>Edit Book</button>
    </div>
  );
};

export default Book;
