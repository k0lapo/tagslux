// import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';
import './About.css';

const About = () => {
  return (
    <div className="font-[Urbanist] bg-[#f5f3ef]">
      <div className="bg-opacity-90 p-1 md:p-12">
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <img
            src="/shades.webp"
            alt="Our Story"
            className="w-full max-w-full h-auto object-cover"
          />
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Curated for Expression
            </h3>
            <p className="text-gray-900 text-base md:text-lg leading-relaxed">
              TAGSLUX is more than streetwear, it’s a statement. Born from bold
              ideas and authentic self-expression, we design pieces that blend
              art, culture, and raw emotion. Our collections are created for the
              fearless, those who don’t just wear fashion but live through it.
            </p>
          </div>
        </div>
        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <img
            src="/gt25.webp"
            alt="Collection"
            className="w-full max-w-full h-auto object-cover md:order-2"
          />
          <div className="text-center md:text-left">
            <p className="text-gray-900 text-base md:text-lg leading-relaxed">
              Our newest capsule, &quot;Icon by TAGSLUX&quot; is a tribute to
              rebellion, rhythm, and raw expression. Inspired by the
              revolutionary spirit of Fela Kuti, this drop channels the pulse of
              Afrobeats and the fire of fearless voices. Every piece echoes
              protest and pride stitched with bold intent, designed to make
              noise, and crafted for those who wear their truth like armor.
            </p>
          </div>
        </div>
        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-10 mb-10 items-center">
          <img
            src="/felaback.webp"
            alt="Vision"
            className="w-full max-w-full h-auto object-cover"
          />
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Quality in Every Thread
            </h3>
            <p className="text-gray-900 text-base md:text-lg leading-relaxed">
              At TAGSLUX, quality is non-negotiable. We use premium, breathable
              fabrics that feel as good as they look, crafted to last, tailored
              with purpose, and made to move with you.
            </p>
          </div>
        </div>
        {/* Socials
        <div className="flex justify-center space-x-6 mt-12">
          <a
            href="https://instagram.com/tagslux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://wa.me/07013306431"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://www.tiktok.com/@tagslux?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <FaTiktok size={22} />
          </a>
          <a
            href="https://twitter.com/tagslux"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <FaXTwitter size={22} />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default About;
