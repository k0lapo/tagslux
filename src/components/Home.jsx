import { useState, useEffect } from 'react';
import ProductCards from './ProductCards';
import SingleVideo from './ImageSlider';
import SubscriptionModal from './SubscriptionModal';
import ImageGallery from './ImageGallery';
// import HeroImage from './HeroImage';
import LoadingSkeleton from './LoadingSkeleton';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://tagslux-backend.vercel.app/');
        if (!response.ok) throw new Error('Failed to fetch products');

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

  const displayedProducts = products.slice(-4);

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-[#f5f3ef]">
      {isModalOpen && (
        <SubscriptionModal onClose={() => setIsModalOpen(false)} />
      )}

      <SingleVideo />

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Latest Products
        </h2>

        {loading ? (
          <div className="flex gap-4 justify-center flex-wrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <LoadingSkeleton key={i} />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            autoplay={{ delay: 4500 }}
            loop
            breakpoints={{
              320: { slidesPerView: 1.1 },
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {displayedProducts.map((product) => (
              <SwiperSlide key={product.id} className="pt-2 pb-8">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 mx-auto max-w-sm">
                  <ProductCards product={product} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* <HeroImage /> */}
        <ImageGallery />
      </div>
    </div>
  );
};

export default Home;
