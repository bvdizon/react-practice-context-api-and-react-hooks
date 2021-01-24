import React, { useContext } from 'react';
import { BookContext } from '../context/book-context';
import Book from './Book';

const BookList = () => {
  const { books } = useContext(BookContext);

  return (
    <div>{books && books.map((book) => <Book key={book.id} {...book} />)}</div>
  );
};

export default BookList;
