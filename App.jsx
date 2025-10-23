import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

const App = () => {
  return (
    <Provider store={store}> {/* Redux Provider */}
      <Router> {/* Router */}
        <Header /> {/* Task 10: Displays on both pages */}
        <main>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
          </Routes>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
