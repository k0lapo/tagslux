import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMessage, setPaymentMessage] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            display_name: 'Phone',
            variable_name: 'phone',
            value: phone,
          },
          {
            display_name: 'Product Name',
            variable_name: 'product_name',
            value: cartItems.map(item => item.name).join(', '), // Concatenate all product names
          },
          {
            display_name: 'Size',
            variable_name: 'size',
            value: cartItems.map(item => item.selectedSize).join(', '), // Concatenate all sizes
          },
          {
            display_name: 'Color',
            variable_name: 'color',
            value: cartItems.map(item => item.selectedColor?.name || 'N/A').join(', '), // Concatenate all colors
          },
          {
            display_name: 'Quantity',
            variable_name: 'quantity',
            value: cartItems.map(item => item.quantity).join(', '), // Concatenate all quantities
          },
          {
            display_name: 'Dispatch Address',
            variable_name: 'address',
            value: formattedTotalAmount,
          }
        ],
      },
      callback: (response) => {
        setPaymentMessage(`Payment successful! Transaction reference: ${response.reference}`);
        clearCart();
        setTimeout(() => {
          navigate('/');
        }, 3000); // Redirect after 3 seconds
      },
      onClose: () => {
        setPaymentMessage('Payment window closed.');
      },
    });
    handler.openIframe();
  };

  return (
    <div className="py-8 md:py-16 px-4 md:px-8 mx-auto container max-w-screen-xl">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Checkout</h2>
        {paymentMessage && (
          <div className="mb-4 md:mb-6 p-4 bg-green-100 text-green-800 rounded">
            {paymentMessage}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900 mb-1">Phone</label>
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-900 mb-1">Adress</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-4">Order Summary</h3>
        {cartItems.map((item) => (
          <div key={`${item.id}-${item.selectedSize}-${item.selectedColor?.name}`} className="mb-4 p-4 border border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg md:text-xl font-semibold">{item.name}</h4>
                <p className="text-gray-700 text-sm">Color: {item.selectedColor?.name || 'N/A'}, Size: {item.selectedSize}</p>
                <p className="text-gray-700">&#8358; {item.price} x {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="text-lg md:text-xl font-semibold">&#8358; {(parseFloat(item.price.replace(/,/g, '')) * item.quantity).toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold">Total: &#8358; {formattedTotalAmount}</h3>
        </div>
        <div className="text-center md:text-right">
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
