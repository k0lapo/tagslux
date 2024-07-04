import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './About.css'; // Ensure you import the CSS file

const About = () => {
  return (
    <div className="py-5 px-4 md:px-8 mx-auto container">
      <div className="shadow-sm rounded-lg p-4 md:p-8">
        <section className="text-justify mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">About</h2>
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-8">
            <img src="/group.jpg" alt="About Us" className="interactive-img w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6" />
            <p className="text-base md:text-lg text-gray-900">
              TAGSLUX is a streetwear brand born from the desire to curate timeless, wavy, and statement-making designs. Our journey began with a simple mission: to craft pieces that resonate with authenticity and individuality. At TAGSLUX, we believe in the power of fashion to tell stories, evoke emotions, and make bold statements.
            </p>
          </div>
          <div className="flex flex-col md:flex-row-reverse items-center mb-4 md:mb-8">
            <img src="/picantee.JPG" alt="Our Mission" className="interactive-img w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:ml-6" />
            <p className="text-base md:text-lg text-gray-900">
              Our latest collection, &quot;Off the Hinges,&quot; is a bold and evocative lineup of designs that push the boundaries of streetwear fashion. This collection is an exploration of emotions and aesthetics, capturing the essence of raw creativity and fearless expression. Each piece is meticulously crafted to deliver a unique statement, ensuring that you stand out with every wear.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-8">
            <img src="/kachi.jpg" alt="Our Vision" className="interactive-img w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6" />
            <p className="text-base md:text-lg text-gray-900">
              The &quot;Off the Hinges&quot; collection was specially created from a deep place filled with mixed emotions of “Fear,” “Love,” and “Tranquility.” Each design from this collection is made with our aim to reduce negative environmental impacts wherever possible. Our customers are guaranteed satisfaction on each purchase with pieces they are sure to love.
            </p>
          </div>
        </section>
        
        <section className="text-justify mt-10 md:mt-20 mb-8 md:mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">OFF THE HINGES</h3>
          <p className="text-base md:text-lg text-gray-900 mb-2 md:mb-4">
            Introducing TAGSLUX&apos;s latest collection, &quot;Off the Hinges&quot; – a bold and evocative lineup of designs that push the boundaries of streetwear fashion. This collection is an exploration of emotions and aesthetics, capturing the essence of raw creativity and fearless expression. Each piece is meticulously crafted to deliver a unique statement, ensuring that you stand out with every wear.
          </p>
          <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-2">Hope ;</h4>
              <p className="text-base md:text-lg text-gray-900 mb-4">
                The &quot;Hope ;&quot; design embodies the spirit of optimism and the promise of a brighter future. With vibrant colors and uplifting motifs, this piece is a beacon of positivity and resilience. Wearing &quot;Hope&quot; is a reminder that even in the darkest times, there is always a light at the end of the tunnel.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Chavelle</h4>
              <p className="text-base md:text-lg text-gray-900 mb-4">
                The &quot;Chavelle&quot; design is inspired by the essence of elegance and sophistication. This piece features intricate patterns and a refined palette, making it perfect for those who appreciate the finer things in life. &quot;Chavelle&quot; represents grace, poise, and timeless style.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Zephyrus</h4>
              <p className="text-base md:text-lg text-gray-900 mb-4">
              &quot;Zephyrus&quot; is inspired by the gentle, refreshing breeze of the west wind. This design features light, airy fabrics and cool, calming colors that evoke a sense of tranquility and freedom. &quot;Zephyrus&quot; is for those who seek peace and harmony in their lives.
              </p>
            </div>
          </div>
        </section>

        <div className="flex justify-center space-x-3 md:space-x-4 mt-6 md:mt-10">
          <a href="https://instagram.com/tagslux" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="text-gray-600 hover:text-black" />
          </a>
          <a href="https://wa.me/07013306431" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} className="text-gray-600 hover:text-black" />
          </a>
          <a href="https://www.tiktok.com/@tagslux?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={22} className="text-gray-600 hover:text-black" />
          </a>
          <a href="https://twitter.com/tagslux" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={22} className="text-gray-600 hover:text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
