import { Link } from 'react-router-dom';

const HeroImage = () => {
  return (
    <div className="relative w-full ">
      <img
        src="/group.jpg"
        alt="Landscape"
        className="w-full left-0 h-full object-cover inset-0"
        style={{ minWidth: '100%' }} // Ensure the image covers the full width
      />
      <div className="absolute bottom-4 right-4 left-4 text-white uppercase text-center md:text-right">
        <p className=" text-xs font-semibold">
          Every Print is A Riot
          <br />
          Every Stitch is A Story
          <br />
          Fela Lives on Every Inch
        </p>
        <Link to="/new-arrivals">
          <p className="text-xs underline hover:text-black mt-2">
            Explore Our Capsule Collection
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HeroImage;
