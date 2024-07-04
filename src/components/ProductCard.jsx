import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Example: Adding the product to cart with selected options
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      selectedSize: 'L', // Replace with actual selected size
      selectedColor: { name: 'Black' }, // Replace with actual selected color object
      quantity: 1, // Replace with actual selected quantity
    });
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 inline-block">
      <Link to={`/product/${product.id}`}>
        <div className="relative w-full h-80">
          <img
            className="w-full h-full object-cover transition-opacity duration-300 front-image"
            src={product.image}
            alt={product.name}
          />
          {product.backImage && (
            <img
              className="w-full h-full object-cover transition-opacity duration-300 absolute top-0 left-0 back-image opacity-0 hover:opacity-100"
              src={product.backImage}
              alt={`Back of ${product.name}`}
            />
          )}
        </div>
      </Link>
      <div className="px-6 py-4 bg-white text-center">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">&#8358; {product.price}</p>
      </div>
      <div className="px-6 py-4 text-center"> {/* Use text-center class to center align content */}
        <Link to={`/product/${product.id}`}>
          <button
            className="bg-green-700 hover:bg-black text-white font-bold py-2 px-4 rounded"
            style={{ width: '60%' }} // Set inline style for button width
          >
            Select Options
          </button>
        </Link>
      </div>

    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    backImage: PropTypes.string,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
