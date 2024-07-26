import { Link } from 'react-router-dom';

const ImageSlider = () => {
  const videoSrc = '/street.mp4'; // Replace with the path to your video file

  return (
    <div className="relative w-full  h-screen">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <div className="text-gray-400 text-center mb-16 px-4 md:px-0">
          <div className="font-extrabold tracking-wide text-2xl md:text-4xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}></div>
          <div className="font-bold text-4xl md:text-4xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>OFF THE HINGES</div>
          <div className="font-normal text-lg md:text-2xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>SS &apos;24</div>
        </div>
      </div>


      <div className="absolute bottom-10 w-full flex justify-center">
        <div className="text-white pt-8 underline hover:text-gray-500">
          <Link to="/product">EXPLORE OUR NEW COLLECTION</Link>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
