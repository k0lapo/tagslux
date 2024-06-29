import { useState } from 'react';

const SubscriptionModal = ({ onClose }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the email submission (e.g., send to an API)
    alert(`Subscribed with email: ${email}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="mb-4">Get amazing deals on our newsletters!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-black w-full"
          >
            Subscribe
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-gray-700 text-bold hover:text-black"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SubscriptionModal;
