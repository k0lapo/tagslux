import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://tagslux-backend.vercel.app/');
        const data = await response.json();
        // Filter products with ID 4-8 to avoid duplication
        const filteredProducts = data.filter(product => product.id >= 4 && product.id <= 8);
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-4">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {products.length === 0 ? (
          <div>No products found</div>
        ) : (
          products.map(product => (
            <div key={product.id} className="max-w-sm bg-white rounded overflow-hidden shadow-lg m-2 transform hover:scale-105 transition-transform duration-300 grid gap-8">
              <Link to={`/product/${product.id}`}>
                <div className="relative w-full h-48">
                  <img className="w-full h-48 object-cover transition-opacity duration-300 front-image" src={product.image} alt={product.name} />
                  {product.backImage && (
                    <img
                      className="w-full h-48 object-cover transition-opacity duration-300 absolute top-0 left-0 back-image opacity-0 hover:opacity-100"
                      src={product.backImage}
                      alt={`Back of ${product.name}`}
                    />
                  )}
                </div>
                <div className="px-6 bg-white py-4">
                  <div className="font-bold bg-white text-xl text-center mb-2">{product.name}</div>
                  <p className="text-gray-700 text-center bg-white text-base">&#8358; {product.price}</p>
                </div>
              </Link>
              <Link to={`/product/${product.id}`}>
                <div className="px-6 bg-white py-4 mx-2">
                  <button
                    className={`${
                      product.inventory <= 0
                        ? "bg-gray-400 cursor-not-allowed" // Sold out style
                        : "bg-gray-800 hover:bg-black"
                    } text-white font-bold py-2 px-4 rounded`}
                    disabled={product.inventory <= 0} // Disable button if sold out
                  >
                    {product.inventory > 0 ? 'Select Options' : 'Sold Out'}
                  </button>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// PropTypes validation for individual product components
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    backImage: PropTypes.string,
    inventory: PropTypes.number.isRequired,
  }),
};

export default Product;
