import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the books from the API
    axios.get('http://localhost:5000/book')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBookClick = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={handleSearch}
        className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <button
          type="button"
          className="bg-indigo-500 text-white rounded-r-md px-4 py-2 ml-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Search
        </button>
      <ul>
        {filteredBooks.map((book) => (
          <li className="cursor-pointer py-2 px-4 border-b border-gray-300 hover:bg-gray-100" key={book.id} onClick={() => handleBookClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
