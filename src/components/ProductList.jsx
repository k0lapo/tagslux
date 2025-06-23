import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://tagslux-backend.vercel.app/');
        const data = await response.json();
        const filteredProducts = data
          .filter((product) => product.id >= 0 && product.id <= 9)
          .map((product) => ({
            ...product,
            inventory: parseInt(product.inventory, 10),
          }))
          .reverse(); // Reverses the order
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-lg py-10">Loading...</div>;
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Available Now
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-600">No products found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative h-64 w-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                    {product.backImage && (
                      <img
                        src={product.backImage}
                        alt={`Back of ${product.name}`}
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
                      />
                    )}
                  </div>
                </Link>

                <div className="px-4 py-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-green-700 text-lg font-medium">
                    ₦{(parseInt(product.price) * 1000).toLocaleString()}
                  </p>
                </div>

                <div className="px-4 pb-5 text-center">
                  <Link to={`/product/${product.id}`}>
                    <button
                      className={`${
                        product.inventory <= 0
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-green-700 hover:bg-black'
                      } w-full text-white font-semibold py-2 px-4 rounded-lg transition duration-300`}
                      disabled={product.inventory <= 0}
                    >
                      {product.inventory > 0 ? 'Select Options' : 'Sold Out'}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
