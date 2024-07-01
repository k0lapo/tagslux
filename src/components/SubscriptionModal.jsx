import { useState, useEffect } from 'react';

const SubscriptionModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const isSubscribed = localStorage.getItem('isSubscribed');
    if (isSubscribed) {
      onClose();
    }
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);

    try {
      const response = await fetch('https://formspree.io/f/mqazkeko', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Subscribed successfully!');
        localStorage.setItem('isSubscribed', 'true');
        setTimeout(() => {
          onClose();
        }, 2000); // Closes the modal after 2 seconds
      } else {
        setStatus('Failed to subscribe.');
      }
    } catch (error) {
      setStatus('There was an error submitting your subscription.');
    }
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
        {status && (
          <p className={`mt-4 ${status === 'Subscribed successfully!' ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}
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
