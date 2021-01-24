import React, { createContext, useEffect, useReducer, useContext } from 'react';
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
      alert: { show: false, message: '' },
    };
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(state.books));

    setTimeout(() => {
      console.log('close alert');
      dispatch({ type: 'CLOSE_ALERT' });
    }, 3000);
  }, [state.books]);

  return (
    <BookContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  return useContext(BookContext);
};

export default BookContextProvider;
