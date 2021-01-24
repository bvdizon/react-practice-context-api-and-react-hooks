import React, { useState, useContext } from 'react';
import { BookContext } from '../context/book-context';

const AddForm = () => {
  const { books, dispatch } = useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const [editID, setEditID] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      const editBook = { id: editID, title, author };
      dispatch({ type: 'ADD', payload: { book: editBook, edit: true } });
    } else {
      const newBook = {
        id: new Date().getTime().toString(),
        title,
        author,
      };

      dispatch({ type: 'ADD', payload: { book: newBook, edit: false } });
    }

    setIsEdit(false);
    setEditID(null);
    setTitle('');
    setAuthor('');
  };

  const handleEdit = (id, title, author) => {
    setIsEdit(true);
    setEditID(id);
    setTitle(title);
    setAuthor(author);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          placeholder='Book title'
          onChange={(e) => setTitle(e.target.value)}
          name='title'
          required
        />
        <input
          type='text'
          value={author}
          placeholder='Book author'
          onChange={(e) => setAuthor(e.target.value)}
          name='author'
          required
        />
        <button>Add</button>
      </form>

      {books.length ? (
        books.map((book) => {
          const { id, title, author } = book;
          return (
            <div key={id}>
              <h3>{title}</h3>
              <h4>{author}</h4>
              <button
                className='btn'
                onClick={() => dispatch({ type: 'DELETE', id: id })}>
                Delete Book
              </button>
              <button onClick={() => handleEdit(id, title, author)}>
                Edit Book
              </button>
            </div>
          );
        })
      ) : (
        <h3>Hello, free time!</h3>
      )}
    </>
  );
};

export default AddForm;
