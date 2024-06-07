import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Link to={`/product/${product.id}`}>
        <div className="relative w-full h-48">
          <img
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 front-image"
            src={product.image}
            alt={product.name}
          />
          {product.backImage && (
            <img
              className="w-full h-48 object-cover transition-opacity  absolute top-0 left-0 opacity-0 hover:opacity-100 scale-105 back-image"
              src={product.backImage}
              alt={`Back of ${product.name}`}
            />
          )}
        </div>
      </Link>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">&#8358; {product.price}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-green-500 hover:bg-black text-white font-bold py-2 px-4 rounded"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
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
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
