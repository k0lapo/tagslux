import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewProduct = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 inline-block transform hover:scale-105 transition-transform duration-300">
      <Link to={`/product/${product.id}`}>
        <div className="relative w-full h-64 overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          {product.backImage && (
            <img
              src={product.backImage}
              alt={`Back of ${product.name}`}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </div>
      </Link>
      <div className="px-6 py-4 bg-white text-center">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        {/* Directly display price in dollars */}
        <p className="text-gray-700 text-base">
          ₦{(parseFloat(product.price) * 1000).toLocaleString()}
        </p>
      </div>
      <div className="px-6 py-4 text-center">
        <Link to={`/product/${product.id}`}>
          <button
            className={`${
              product.inventory <= 0
                ? 'bg-green-400 cursor-not-allowed'
                : 'bg-green-800 hover:bg-black'
            } text-white font-bold py-2 px-4 rounded`}
            style={{ width: '60%' }}
            disabled={product.inventory <= 0}
          >
            {product.inventory > 0 ? 'Select Options' : 'Sold Out'}
          </button>
        </Link>
      </div>
    </div>
  );
};

// PropTypes validation
NewProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    backImage: PropTypes.string,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
};

export default NewProduct;
