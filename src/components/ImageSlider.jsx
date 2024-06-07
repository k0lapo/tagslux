

const ImageSlider = () => {
  const videoSrc = '/street.mp4'; // Replace with the path to your video file
  const caption = (
    <div>
      <div className="font-extrabold tracking-wide">TAGSLUX</div>
      <div className="font-bold text-4xl">OFF THE HINGES</div>
      <div className="font-normal">SS &apos;24</div>
    </div>
  );

  return (
    <div className="relative w-full h-auto">
      <video autoPlay loop muted className="w-full h-auto">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-gray-200 text-5xl py-5 font-bold text-center">
          {caption}
        </div>
      </div>
    </div>
  )
};

export default ImageSlider;
