
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {


  if (!product) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  return (
    <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg m-4 transform
     hover:scale-105 transition-transform duration-300 grid gap-8">
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
          {/* <p className="text-gray-700 text-base">
            {product.inventory > 0 ? `${product.inventory} left` : 'Sold Out'}
          </p> */}
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
  );
};

// Add PropTypes validation
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    backImage: PropTypes.string,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;
