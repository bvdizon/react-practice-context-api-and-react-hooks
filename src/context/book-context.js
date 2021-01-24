import React, { createContext, useEffect, useReducer } from 'react';
import reducerBook from '../reducers/reducer-book';

export const BookContext = createContext();

// function to fetch books in LS
const fetchBooksInLS = () => {
  const booksInLS = localStorage.getItem('books');
  return booksInLS ? JSON.parse(booksInLS) : [];
};

const BookContextProvider = ({ children }) => {
  // notice that for the 3rd argument, it is an inline anonymous
  // function. also returned an object.
  const [state, dispatch] = useReducer(reducerBook, [], () => {
    return {
      books: fetchBooksInLS(),
    };
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(state.books));
  }, [state.books]);

  return (
    <BookContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
