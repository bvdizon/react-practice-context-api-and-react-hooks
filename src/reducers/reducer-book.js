const reducerBook = (state, action) => {
  switch (action.type) {
    case 'ADD':
      if (action.payload.edit) {
        const updateBooks = state.books.map((book) => {
          if (book.id === action.payload.book.id) {
            return {
              ...book,
              title: action.payload.book.title,
              author: action.payload.book.author,
            };
          }
          return book;
        });
        return {
          ...state,
          books: updateBooks,
          alert: { show: true, message: 'Edit(s) on book is now saved' },
        };
      } else {
        return {
          ...state,
          books: [...state.books, action.payload.book],
          alert: { show: true, message: 'New book has been added.' },
        };
      }

    case 'DELETE':
      const filteredBooks = state.books.filter((book) => book.id !== action.id);

      return {
        ...state,
        books: filteredBooks,
        alert: { show: true, message: "You've deleted a book." },
      };

    case 'CLOSE_ALERT':
      return {
        ...state,
        alert: { show: false, message: '' },
      };

    default:
      return state;
  }
};

export default reducerBook;
