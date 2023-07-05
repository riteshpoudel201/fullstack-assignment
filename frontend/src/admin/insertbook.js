import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [isbn, setISBN] = useState('');
  const [status, setStatus] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a book object with form data
    const newBook = {
      title,
      isbn,
      status,
      author,
      price,
      category,
    };

    // Send a POST request to the API to insert the new book
    axios
      .post('http://localhost:5000/book', newBook)
      .then((response) => {
        console.log('Book inserted:', response.data);
        // Reset form fields after successful submission
        setTitle('');
        setISBN('');
        setStatus('');
        setAuthor('');
        setPrice('');
        setCategory('');
      })
      .catch((error) => {
        console.log('Error inserting book:', error);
      });
  };
  console.log(status);
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="isbn" className="block text-gray-700 font-semibold mb-1">
            ISBN:
          </label>
          <input
            type="text"
            id="isbn"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={isbn}
            onChange={(e) => setISBN(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 font-semibold mb-1">
            Status:
          </label>
          <select
            id="status"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value='0'>Select Status</option>
            <option value='Available'>Available</option>
            <option value= 'Not Available'>Not Available</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-semibold mb-1">
            Author:
          </label>
          <input
            type="text"
            id="author"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-semibold mb-1">
            Price:
          </label>
          <input
            type="number"
            id="price"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-semibold mb-1">
            Category:
          </label>
          <input
            type="text"
            id="category"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
