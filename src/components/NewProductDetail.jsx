import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const NewProductDetail = () => {
  const { id } = useParams();

  // State for managing product, selected attributes, and image toggle
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFrontImage, setIsFrontImage] = useState(true);

  // Fetch product from `fela` by ID
  useEffect(() => {
    const fetchProduct = () => {
      try {
        const foundProduct = products.find((item) => item.id === parseInt(id));
        if (!foundProduct) {
          throw new Error('Product not found');
        }
        setProduct(foundProduct);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle loading state
  if (loading) {
    return <div>Loading product...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Handle case where product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  const toggleImage = () => {
    setIsFrontImage(!isFrontImage);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-wrap -mx-6">
        <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0 relative">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            src={isFrontImage ? products.image : products.backImage}
            alt={product.name}
          />
          {products.backImage && (
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
              <button
                className="bg-gray-300 text-black mx-8 font-black py-2 px-4 rounded-l"
                onClick={toggleImage}
              >
                &lt;
              </button>
            </div>
          )}
          {products.backImage && (
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              <button
                className="bg-gray-300 text-black mx-8 font-black py-2 px-4 rounded-r"
                onClick={toggleImage}
              >
                &gt;
              </button>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 px-6 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">{products.name}</h1>
          <p className="text-gray-700 text-base mb-4">
            Price: &#8358; {products.price} / ${(products.price / 780).toFixed(2)}
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Color</h2>
            <p className="text-gray-700">{products.color || 'N/A'}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Size</h2>
            <p className="text-gray-700">{products.size || 'N/A'}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Inventory</h2>
            <p className="text-gray-700">
              {products.inventory > 0 ? `${products.inventory} in stock` : 'Sold Out'}
            </p>
          </div>

          <button
            className={`${
              products.inventory > 0
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-gray-400 cursor-not-allowed'
            } text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105`}
            disabled={products.inventory <= 0}
          >
            {products.inventory > 0 ? 'Add to Cart' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProductDetail;
