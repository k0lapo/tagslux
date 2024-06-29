import { Link } from 'react-router-dom';

const HeroImage = () => {
  return (
    <div className="relative w-full ">
      <img
        src="/lands.JPG"
        alt="Landscape"
        className="w-full left-0 h-full object-cover inset-0"
        style={{ minWidth: '100%' }} // Ensure the image covers the full width
      />
      <div className="absolute bottom-4 right-4 left-4 text-white uppercase text-center md:text-right">
        <p className=" text-xs font-semibold">
          The New Collection Is A Bold And<br />
          Evocative Lineup Of Designs.
        </p>
        <Link to="/product">
          <p className="text-xs underline hover:text-black mt-2">
            Explore Our New Collection
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HeroImage;
