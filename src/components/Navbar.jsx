// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; // Import the useCart hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart(); // Use the cart context to get cart items

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Calculate the total number of items in the cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-8 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="Logo" className="h-20" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-700 hover:text-black hover:font-bold">Home</Link>
          <Link to="/product" className="text-gray-700 hover:text-black hover:font-bold">Our Store</Link>
          <Link to="/about" className="text-gray-700 hover:text-black hover:font-bold">About</Link>
          <Link to="/cart" className="relative text-gray-700 hover:text-black hover:font-bold">
            <FaShoppingCart />
            {cartItemCount > 0 && (
              <span className="absolute bottom-1 left-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-black hover:font-bold">
            <FaUser />
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-10 pt-0 pb-4 flex justify-end">
          <div className="flex flex-col items-end space-y-2">
            <Link to="/" onClick={closeMenu} className="block py-2 text-gray-700 hover:text-black hover:font-bold">Home</Link>
            <Link to="/product" onClick={closeMenu} className="block py-2 text-gray-700 hover:text-black hover:font-bold">Our Store</Link>
            <Link to="/about" onClick={closeMenu} className="block py-2 text-gray-700 hover:text-black hover:font-bold">About</Link>
            <div className='flex'>
              <Link to="/cart" onClick={closeMenu} className="relative block mr-3 py-2 text-gray-700 hover:text-black hover:font-bold">
                <FaShoppingCart className="inline" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              <Link to="/login" onClick={closeMenu} className="block py-2 text-gray-700 hover:text-black hover:font-bold">
                <FaUser className="inline" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
