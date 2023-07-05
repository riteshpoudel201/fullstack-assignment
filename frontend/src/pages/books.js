import React from 'react'
import SearchComponent from '../components/search'
import BookList from '../components/allbooks';

function Books() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-4 mb-4">
      <SearchComponent />
      </div>
      <BookList />
    </div>
  )
}

export default Books