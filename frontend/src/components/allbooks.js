import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = ({ addToCart, isLoggedIn }) => {
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch the books from the API
    axios
      .get('http://localhost:5000/book')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleAddToCart = (book) => {
    if (!isLoggedIn) {
      setErrorMessage('Please login to add items to the cart.');
      return;
    }

    addToCart(book);
  };

  useEffect(() => {
    if (isLoggedIn) {
      setErrorMessage(''); // Clear the error message
    }
  }, [isLoggedIn]);

  return (
    <div className="flex flex-wrap justify-center">
      {books.map((book) => (
        <div key={book.id} className="max-w-sm mx-2 mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{book.title}</div>
            <p className="text-gray-700 text-base">{book.description}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {book.genre}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {book.author}
            </span>
          </div>
          <button
            onClick={() => handleAddToCart(book)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500"
          >
            Add to Cart
          </button>
        </div>
      ))}
      {errorMessage && (
        <div className="max-w-sm mx-2 mb-4 bg-red-100 text-red-600 py-2 px-4 rounded-md">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default BookList;
