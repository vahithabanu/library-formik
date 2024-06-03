import React from 'react';

const BookList = ({ books, setEditingBook, deleteBook }) => {
  return (
    <div className="book-list">
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <strong>{book.title}</strong> by {book.author} (ISBN: {book.isbn}, Published on: {book.publicationDate})
            </div>
            <button onClick={() => setEditingBook(book)} >Edit</button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
