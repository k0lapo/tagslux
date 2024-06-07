import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const totalAmount = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/,/g, ''));
    return acc + price * item.quantity;
  }, 0);

  const formattedTotalAmount = totalAmount.toLocaleString();

  const handlePaystackPayment = () => {
    const handler = window.PaystackPop.setup({
      key: 'pk_live_b49bb383be666d02e7127982c7a0061a0a9e15a3', // Replace with your Paystack public key
      email,
      amount: totalAmount * 100, // Paystack accepts amount in kobo
      currency: 'NGN',
      ref: '' + Math.floor(Math.random() * 1000000000 + 1), // Generate a random reference number
      metadata: {
        custom_fields: [
          {
            display_name: name,
            variable_name: 'name',
            value: phone,
          },
        ],
      },
      callback: (response) => {
        alert('Payment successful! Transaction reference: ' + response.reference);
        clearCart();
        navigate('/');
      },
      onClose: () => {
        alert('Payment window closed.');
      },
    });
    handler.openIframe();
  };

  return (
    <div className="py-16 px-8 mx-auto container">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-6">Checkout</h2>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
        </div>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
            <input
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            />
        </div>
        <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
        {cartItems.map((item) => {
            const itemTotal = parseFloat(item.price.replace(/,/g, '')) * item.quantity;
            return (
                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor?.name}`} className="flex items-center justify-between mb-4 p-4 border border-gray-200">
                    <div>
                        <h4 className="text-xl font-semibold">{item.name}</h4>
                        <p className="text-gray-700 text-sm">Color: {item.selectedColor?.name || 'N/A'}, Size: {item.selectedSize}</p>
                        <p className="text-gray-700">&#8358; {item.price} x {item.quantity}</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold">&#8358; {itemTotal.toLocaleString()}</p>
                    </div>
                </div>
            );
        })}
        <div className="flex justify-between items-center mb-6">
             <h3 className="text-2xl font-bold">Total: &#8358; {formattedTotalAmount}</h3>
        </div>
        <div className="text-right">
            <button
            onClick={handlePaystackPayment}
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
            >
            Pay Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
