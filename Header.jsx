import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react'; // Assuming you use a library like lucide-react or similar

const Header = () => {
  // Task 11: Calculate total number of items
  const totalItems = useSelector(state => 
    state.plants.cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', borderBottom: '1px solid #ccc' }}>
      <h1>🌿 Plant Emporium</h1> {/* Task 5: Company Name */}
      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        {/* Task 12: Navigation to either page */}
        <Link to="/">Home</Link>
        <Link to="/products">Shop Plants</Link>
        <Link to="/cart" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <ShoppingCart size={24} />
          {/* Task 11: Shopping cart icon with value */}
          <span style={{ 
              position: 'absolute', 
              top: '-5px', 
              right: '-10px', 
              backgroundColor: 'green', 
              color: 'white', 
              borderRadius: '50%', 
              padding: '2px 6px',
              fontSize: '12px'
          }}>
            {totalItems}
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
