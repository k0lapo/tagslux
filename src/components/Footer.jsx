import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fakeSubscribe(email);
      if (response.success) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setError('Subscription failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const fakeSubscribe = async (email) => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "fail@example.com") {
          resolve({ success: false });
        } else {
          resolve({ success: true });
        }
      }, 1000);
    });
  };

  return (
    <footer className="bg-gray-300 text-black py-8 px-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Policies</h3>
            <ul>
              <li>
                <Link to="/shipping-policy" className="hover:underline">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/return-exchange" className="hover:underline">Return & Exchange</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:underline">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul>
              <li>
                <Link to="/payment-options" className="hover:underline">Payment Options</Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">Contact Us</Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:underline">FAQs</Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex flex-wrap items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full md:flex-1 p-3 rounded-l md:rounded-none md:rounded-l text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="bg-gray-900 text-white px-4 py-2 md:py-3 rounded-r md:rounded-none md:rounded-r w-full md:w-auto hover:bg-black transition duration-300 ease-in-out"
              >
                Subscribe
              </button>
            </form>
            {message && <p className="mt-4 text-green-500">{message}</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
            <a href="https://instagram.com/tagslux" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="text-gray-600 hover:text-black" />
            </a>
            <a href="https://wa.me/07013306431" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} className="text-gray-600 hover:text-black" />
            </a>
            <a href="https://www.tiktok.com/@tagslux?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={22} className="text-gray-600 hover:text-black" />
            </a>
            <a href="https://twitter.com/tagslux" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={22} className="text-gray-600 hover:text-black" />
            </a>
          </div>
        <div className="text-center mt-8 py-2">
          <p>&copy; {new Date().getFullYear()} tagslux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
