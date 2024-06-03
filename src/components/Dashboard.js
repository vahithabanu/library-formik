import React, { useState } from 'react';
import BookList from './BookList';
import AuthorList from './AuthorList';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';

const Dashboard = () => {
  const [books, setBooks] = useState([
    { id: 1, title: '1984', author: 'George Orwell', isbn: '0451524934', publicationDate: '1949-06-08' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '0061120081', publicationDate: '1960-07-11' },
  ]);

  const [authors, setAuthors] = useState([
    { id: 1, name: 'George Orwell', birthDate: '1903-06-25', biography: 'English novelist, essayist, journalist, and critic.' },
    { id: 2, name: 'Harper Lee', birthDate: '1926-04-28', biography: 'American novelist widely known for "To Kill a Mockingbird".' },
  ]);

  const [editingBook, setEditingBook] = useState(null);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const editBook = (updatedBook) => {
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
    setEditingBook(null);
  };

  const deleteBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const addAuthor = (author) => {
    setAuthors([...authors, { ...author, id: Date.now() }]);
  };

  const editAuthor = (updatedAuthor) => {
    setAuthors(authors.map((author) => (author.id === updatedAuthor.id ? updatedAuthor : author)));
    setEditingAuthor(null);
  };

  const deleteAuthor = (authorId) => {
    setAuthors(authors.filter((author) => author.id !== authorId));
  };

  return (
    <div className="dashboard" style={{backgroundcolor:'blue'}}>
      <h1>Library Management System</h1>
      <div className="forms">
        <BookForm addBook={addBook} editBook={editBook} editingBook={editingBook} setEditingBook={setEditingBook} />
        <AuthorForm addAuthor={addAuthor} editAuthor={editAuthor} editingAuthor={editingAuthor} setEditingAuthor={setEditingAuthor} />
      </div>
      <div className="lists">
        <BookList books={books} setEditingBook={setEditingBook} deleteBook={deleteBook} />
        <AuthorList authors={authors} setEditingAuthor={setEditingAuthor} deleteAuthor={deleteAuthor} />
      </div>
    </div>
  );
};

export default Dashboard;
