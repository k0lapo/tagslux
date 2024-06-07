
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartContext';

const LayoutTwo = ({ children }) => {
  const { cartItems } = useCart();

  return (
    <div className="relative">
      {/* Cart icon with count badge */}
      <Link to="/cart" className="fixed bottom-10 right-10 flex items-center justify-center bg-white text-gray-700 rounded-full h-12 w-12 shadow-lg">
        <FaShoppingCart size={25} />
        {cartItems.length > 0 && (
          <span className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs absolute -top-1 -right-1">
            {cartItems.length}
          </span>
        )}
      </Link>
      {/* Main content */}
      <div>{children}</div>
    </div>
  );
};

export default LayoutTwo;
