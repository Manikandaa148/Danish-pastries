import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import './pages/Home.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <CartProvider>
      <div className="App">
        <Header onSearch={setSearchTerm} />
        <CartDrawer />
        <main>
          <Home searchTerm={searchTerm} />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
