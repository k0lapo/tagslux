import { Link } from 'react-router-dom';

const ImageSlider = () => {
  const videoSrc =
    'https://res.cloudinary.com/ddlhofrln/video/upload/v1751314429/fela1_pig21e.mp4'; // Replace with the path to your video file

  return (
    <div className="relative w-full  h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <div className="text-gray-400 text-center mb-16 px-4 md:px-0">
          <div
            className="font-extrabold tracking-wide text-2xl md:text-4xl"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          ></div>
          <div
            className="font-bold text-gray-300 text-4xl md:text-4xl"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            ICON BY TAGSLUX
          </div>
          <div
            className="font-normal text-gray-300 text-lg md:text-2xl"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
          >
            CAPSULE &apos;25
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center">
        <div className="text-gray-400 pt-8 underline hover:text-white">
          <Link to="/new-arrivals">EXPLORE OUR CAPSULE COLLECTION</Link>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
