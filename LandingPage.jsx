import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      backgroundImage: 'url(/images/bg-plant.jpg)', // Task 3
      backgroundSize: 'cover',
      minHeight: '100vh'
    }}>
      <h1>Welcome to Plant Emporium</h1> {/* Task 5: Company Name */}
      <p style={{ maxWidth: '600px', margin: '20px auto' }}> {/* Task 4: Paragraph */}
        We are a passionate small business dedicated to bringing the beauty and tranquility 
        of nature into your home. Discover our curated collection of low-maintenance 
        to exotic houseplants perfect for any space.
      </p>
      {/* Task 6: Get Started button linking to product listing page */}
      <Link to="/products">
        <button style={{ padding: '15px 30px', fontSize: '1.2em', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;