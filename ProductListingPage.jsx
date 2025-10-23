import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/plantSlice';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.plants.products);
  const cartItems = useSelector(state => state.plants.cartItems);

  // Group plants by category (Task 8)
  const categories = products.reduce((acc, plant) => {
    acc[plant.category] = acc[plant.category] || [];
    acc[plant.category].push(plant);
    return acc;
  }, {});

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    // Task 9: The cart icon value updates automatically via the Header component
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Houseplant Collection</h2>
      {Object.entries(categories).map(([category, plants]) => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <h3>{category} Plants</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {plants.map(plant => {
              // Task 9: Determine if the button should be disabled
              const isInCart = cartItems.some(item => item.id === plant.id);
              return (
                <div key={plant.id} style={{ border: '1px solid #ddd', padding: '10px', width: '200px' }}>
                  {/* Task 7: Thumbnail, Name, Price */}
                  <img src={plant.thumbnail} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                  <h4>{plant.name}</h4>
                  <p>${plant.price.toFixed(2)}</p>
                  
                  {/* Task 9: Add to Cart button logic */}
                  <button 
                    onClick={() => handleAddToCart(plant)} 
                    disabled={isInCart}
                    style={{ 
                      padding: '10px', 
                      backgroundColor: isInCart ? '#ccc' : 'green', 
                      color: 'white', 
                      border: 'none',
                      cursor: isInCart ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;