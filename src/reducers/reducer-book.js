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
        };
      } else {
        return {
          ...state,
          books: [...state.books, action.payload.book],
        };
      }

    case 'DELETE':
      const filteredBooks = state.books.filter((book) => book.id !== action.id);

      return {
        ...state,
        books: filteredBooks,
      };

    default:
      return state;
  }
};

export default reducerBook;
