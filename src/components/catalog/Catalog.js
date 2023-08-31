import React, { useState, useEffect } from 'react';

export default function Catalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log('Fetching data from API'); // Debugging statement
    fetch('/api/data')
      .then(res => res.json())
      .then(books => {
        console.log('Data fetched:', books);
        setBooks(books)
      })
      .catch(error => console.error('Fetch error:', error));
  }, []);


console.log('Data in state:', books); // Debugging statement

  return (
    <div>
      <h1>Books List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}