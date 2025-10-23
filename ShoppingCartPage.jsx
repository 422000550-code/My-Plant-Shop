import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, deleteItem } from '../store/plantSlice';
import { Link } from 'react-router-dom';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.plants.cartItems);

  // Task 13: Total number of plants in cart
  const totalItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Task 14: Total cost of all items in cart
  const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  const handleIncrease = (id) => dispatch(increaseQuantity(id)); // Task 16
  const handleDecrease = (id) => dispatch(decreaseQuantity(id)); // Task 17
  const handleDelete = (id) => dispatch(deleteItem(id)); // Task 18

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Shopping Cart</h2>
      
      <div style={{ border: '1px solid green', padding: '10px', marginBottom: '20px' }}>
        <p>Total Items: **{totalItemsCount}**</p> {/* Task 13 */}
        <p>Total Cost: **${totalCost}**</p> {/* Task 14 */}
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {cartItems.map(item => (
            <div key={item.id} style={{ border: '1px solid #eee', padding: '15px', display: 'flex', alignItems: 'center', gap: '20px' }}>
              {/* Task 15: Thumbnail, Name, Unit Price */}
              <img src={item.thumbnail} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
              <div style={{ flexGrow: 1 }}>
                <h4>{item.name}</h4>
                <p>Unit Price: ${item.price.toFixed(2)}</p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Task 17: Decrease button */}
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <span>**{item.quantity}**</span>
                {/* Task 16: Increase button */}
                <button onClick={() => handleIncrease(item.id)}>+</button>
              </div>

              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              
              {/* Task 18: Delete button */}
              <button onClick={() => handleDelete(item.id)} style={{ color: 'red', border: 'none', background: 'none' }}>🗑️ Delete</button>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
        {/* Task 19: Checkout button */}
        <button style={{ padding: '10px 20px', backgroundColor: 'teal', color: 'white', border: 'none' }} onClick={() => alert('Coming Soon')}>
          Proceed to Checkout
        </button>
        {/* Task 20: Continue shopping button */}
        <Link to="/products">
          <button style={{ padding: '10px 20px', border: '1px solid #ccc' }}>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartPage;