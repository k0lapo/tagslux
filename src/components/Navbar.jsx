import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes, FaUser, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import {FaXTwitter} from 'react-icons/fa6';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white w-full z-50">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="Logo" className="h-24" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-800 font-bold">Home</Link>
          <Link to="/product" className="text-gray-800 font-bold">Our Store</Link>
          <Link to="/about" className="text-gray-800 font-bold">About</Link>
          <Link to="/cart" className="relative text-gray-800 font-bold">
            <FaShoppingCart />
            {cartItemCount > 0 && (
              <span className="absolute bottom-1 left-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link to="/" className="text-gray-800 font-bold">
            <FaUser />
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div className={`fixed inset-0 z-50 bg-white flex flex-col justify-between transition-transform duration-700 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex justify-between items-center px-8 py-9">
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="Logo" className="h-28" />
          </Link>
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center mb-32 space-y-5 w-full">
          <Link to="/" onClick={closeMenu} className="block py-2 text-black text-xl hover:text-gray-700 font-bold">Home</Link>
          <Link to="/product" onClick={closeMenu} className="block py-2 text-black text-xl hover:text-gray-700 font-bold">Our Store</Link>
          <Link to="/about" onClick={closeMenu} className="block py-2 text-black text-xl hover:text-gray-700 font-bold">About</Link>
          <div className='flex space-x-6 mt-6'>
            <Link to="/cart" onClick={closeMenu} className="relative block py-2 text-black text-xl hover:text-gray-700 font-bold">
              <FaShoppingCart className="inline" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link to="/" onClick={closeMenu} className="block py-2 text-black text-xl hover:text-gray-700 font-bold">
              <FaUser className="inline" />
            </Link>
          </div>
        </div>
        {/* Social media icons section for mobile */}
        <div className={`md:hidden flex justify-center space-x-4 mb-10 ${isOpen ? 'flex' : 'hidden'}`}>
          <a href="https://instagram.com/tagslux" className="text-black font-bold">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.tiktok.com/@tagslux?is_from_webapp=1&sender_device=pc" className="font-bold text-black">
            <FaTiktok size={24} />
          </a>
          <a href="https://wa.me/07013306431" className=" font-bold text-black">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://twitter.com/tagslux" className=" font-bold text-black">
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>
      <style jsx>{`
        nav {
          background-color: transparent;
          transition: background-color 0.3s ease;
        }

        .invert-white {
          filter: invert(100%) grayscale(100%) brightness(200%);
        }

        .invert-black {
          filter: invert(100%) grayscale(100%) brightness(200%);
        }

        nav:hover {
          background-color: ;
        }

        @media (max-width: 767px) {
          nav {
            background-color: white;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
