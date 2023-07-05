import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import { AuthProvider } from './components/authcontext';
import Books from './pages/books';
import Home from './pages/home';
import Cart from './pages/cart';
import InsertBook from './admin/insertbook';


const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <Router>
      <AuthProvider>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/book" element={<Books/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/addbook" element={<InsertBook/>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
