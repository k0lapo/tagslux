
import { useCart } from '../context/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transform hover:scale-105 transition-transform duration-300">
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
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">&#8358; {product.price}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-green-600 hover:bg-black text-white font-bold py-2 px-4 rounded"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
