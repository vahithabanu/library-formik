import React from 'react';

const AuthorList = ({ authors, setEditingAuthor, deleteAuthor }) => {
  return (
    <div className="author-list">
      <h2>Author List</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            <div>
              <strong>{author.name}</strong> (Born on: {author.birthDate})
              <p>{author.biography}</p>
            </div>
            <button onClick={() => setEditingAuthor(author)}>Edit</button>
            <button onClick={() => deleteAuthor(author.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
