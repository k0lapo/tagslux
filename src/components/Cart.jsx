import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateCartItemQuantity, getTotalQuantity } = useCart();

  const totalAmount = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/,/g, ''));
    return acc + price * item.quantity;
  }, 0);

  const formattedTotalAmount = totalAmount.toLocaleString();

  return (
    <div className="container px-4 md:px-8 lg:px-32 py-12 mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-700 text-center">
          Your cart is empty. <Link to="/product" className="text-blue-500">Go to store</Link>
        </p>
      ) : (
        <>
          <div className="mb-4">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor?.name}`} className="flex flex-col md:flex-row items-center justify-between mb-4 p-4 border border-gray-200">
                <div className="flex items-center mb-2 md:mb-0">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-700 text-sm">
                      Color: {item.selectedColor?.name || 'N/A'}, Size: {item.selectedSize}
                    </p>
                    <p className="text-gray-700">&#8358; {item.price} x {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateCartItemQuantity(item.id, item.selectedSize, item.selectedColor?.name, item.quantity - 1)}
                    disabled={item.quantity === 1}
                    className="text-gray-500 hover:text-gray-700 px-2"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateCartItemQuantity(item.id, item.selectedSize, item.selectedColor?.name, item.quantity + 1)}
                    className="text-gray-500 hover:text-gray-700 px-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor?.name)}
                    className="text-red-500 hover:underline ml-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold">Total: &#8358; {formattedTotalAmount}</h3>
            <button onClick={clearCart} className="text-red-500 hover:underline mt-4 md:mt-0">
              Clear Cart
            </button>
          </div>
          <div className="text-center md:text-right">
            <Link to="/checkout" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
      <div className="fixed bottom-10 right-10 flex items-center justify-center bg-white text-gray-700 rounded-full h-12 w-12 shadow-lg">
        <FaShoppingCart size={24} />
        <span className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs absolute -top-1 -right-1">
          {getTotalQuantity()}
        </span>
      </div>
    </div>
  );
};

export default Cart;
