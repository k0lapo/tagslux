import { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [isFrontImage, setIsFrontImage] = useState(true);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const toggleImage = () => {
    setIsFrontImage(!isFrontImage);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-wrap -mx-6">
        <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0 relative">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            src={isFrontImage ? selectedColor.image : selectedColor.backImage}
            alt={product.name}
          />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button
              className="bg-gray-300 text-black mx-8 font-black py-2 px-4 rounded-l"
              onClick={toggleImage}
            >
              &lt;
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              className="bg-gray-300 text-black mx-8 font-black py-2 px-4 rounded-r"
              onClick={toggleImage}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-6 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 text-base mb-4">&#8358; {product.price}</p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Select Color</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor.name === color.name
                      ? 'border-black'
                      : 'border-gray-300'
                  }`}
                  onClick={() => {
                    setSelectedColor(color);
                    setIsFrontImage(true); // Reset to front image when color changes
                  }}
                  style={{ backgroundColor: color.hex }}
                ></button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Select Size</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`p-2 w-12 h-12 rounded border ${
                    selectedSize === size
                      ? 'bg-black text-white'
                      : 'bg-white border-gray-300'
                  } transition-colors duration-200 hover:bg-gray-200`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Quantity</h2>
            <div className="flex justify-center md:justify-start items-center space-x-4">
              <button
                className="bg-gray-300 text-black font-bold py-2 px-4 rounded"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="text-xl font-bold">{quantity}</span>
              <button
                className="bg-gray-300 text-black font-bold py-2 px-4 rounded"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            onClick={() =>
              addToCart({ ...product, selectedColor, selectedSize, quantity })
            }
          >
            Add to Cart
          </button>


          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">About This Design</h2>
            <p className="text-gray-700">{product.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
