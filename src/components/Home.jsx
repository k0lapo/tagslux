import { useState, useEffect } from 'react';
import Product from './Product';
import SingleVideo from './ImageSlider';
import SubscriptionModal from './SubscriptionModal';
import ImageGallery from './ImageGallery';
import HeroImage from './HeroImage';
import LoadingSkeleton from './LoadingSkeleton'; // Import the LoadingSkeleton

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch products from an API
  useEffect(() => {
    // Show the modal when the component mounts
    setIsModalOpen(true);

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://tagslux-backend.vercel.app/?vercelToolbarCode=byItbl2fmwZtl-d"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Show an error message if there was an error fetching the data
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Display only the first 5 products
  const displayedProducts = products.slice(0, 5);

  return (
    <div className='bg-gray-100'>
      {isModalOpen && <SubscriptionModal onClose={() => setIsModalOpen(false)} />}
      <SingleVideo />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center">
          {loading ? (
            // Display loading skeletons for the products
            Array.from({ length: 5 }).map((_, index) => (
              <LoadingSkeleton key={index} />
            ))
          ) : (
            // Render the actual products
            displayedProducts.map(product => (
              <Product key={product.id} product={product} />
            ))
          )}
        </div>
        <HeroImage />
        <ImageGallery />
      </div>
    </div>
  );
};

export default Home;
