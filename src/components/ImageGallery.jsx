import { Link } from 'react-router-dom';

const ImageGallery = () => {
  const placeholderImages = ['/popstar.webp', '/sickk.webp'];

  return (
    <div>
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
          {placeholderImages.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`Placeholder ${index + 1}`}
                className="w-full h-auto object-cover shadow-md"
              />
              <Link to="/new-arrivals">
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-gray-300 hover:text-white text-sm underline">
                    Explore Now
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
