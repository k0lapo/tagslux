import { useState, useEffect } from 'react';
import Product from './Product';
import products from '../data/products';
import SingleVideo from './ImageSlider';
import SubscriptionModal from './SubscriptionModal';
// import ReviewSlider from './ReviewSlider';
import ImageGallery from './ImageGallery';
import HeroImage from './HeroImage';

const Home = () => {
  const displayedProducts = products.slice(0, 5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Show the modal when the component mounts
    setIsModalOpen(true);
  }, []);

  return (
    <div className='bg-gray-100'>
      {isModalOpen && <SubscriptionModal onClose={() => setIsModalOpen(false)} />}
      <SingleVideo />
      {/* Add the ImageGallery component here */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center">
          {displayedProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <HeroImage/>
        <ImageGallery /> 
        {/* <ReviewSlider /> */}
      </div>
    </div>
  );
};

export default Home;
