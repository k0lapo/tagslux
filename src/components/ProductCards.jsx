// components/ProductCard.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="w-full sm:w-[300px] bg-white rounded-lg overflow-hidden shadow-md m-2 transform hover:scale-105 transition-transform duration-300 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-opacity duration-300"
          />
          {product.backImage && (
            <img
              src={product.backImage}
              alt={`Back of ${product.name}`}
              className="object-cover w-full h-full absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between">
          <h2 className="font-semibold text-lg text-center text-gray-800 mb-2">
            {product.name}
          </h2>
          <p className="text-center text-base text-gray-600 font-medium">
            ₦{(parseInt(product.price) * 1000).toLocaleString()}
            <span className="text-xs text-red-500 block">Presale Price</span>
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <Link to={`/product/${product.id}`}>
          <button
            className={`w-full text-white font-semibold py-2 px-4 rounded ${
              product.inventory <= 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gray-800 hover:bg-black'
            }`}
            disabled={product.inventory <= 0}
          >
            {product.inventory > 0 ? 'Select Options' : 'Sold Out'}
          </button>
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    backImage: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
