import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const About = () => {
  return (
    <div className="py-16 px-8 mx-auto container">
      <div className="bg-white shadow-sm rounded-lg p-8">
        <section className="text-justify mb-16">
          <h2 className="text-4xl font-bold mb-6 text-center">About TAGSLUX</h2>
          <p className="text-lg text-gray-900 mb-4">
            TAGSLUX is a streetwear brand born from the desire to curate timeless, wavy, and statement-making designs. Our journey began with a simple mission: to craft pieces that resonate with authenticity and individuality. At TAGSLUX, we believe in the power of fashion to tell stories, evoke emotions, and make bold statements.
          </p>
          <p className="text-lg text-gray-900 mb-4">
            Our latest collection, &quot;Off the Hinges,&quot; is a bold and evocative lineup of designs that push the boundaries of streetwear fashion. This collection is an exploration of emotions and aesthetics, capturing the essence of raw creativity and fearless expression. Each piece is meticulously crafted to deliver a unique statement, ensuring that you stand out with every wear.
          </p>
          <p className="text-lg text-gray-900 mb-4">
            The &quot;Off the Hinges&quot; collection was specially created from a deep place filled with mixed emotions of “Fear,” “Love,” and “Tranquility.” Each design from this collection is made with our aim to reduce negative environmental impacts wherever possible. Our customers are guaranteed satisfaction on each purchase with pieces they are sure to love.
          </p>

          <section className="text-justify mt-20 mb-16">
            <h3 className="text-4xl font-bold mb-6 text-center">OFF THE HINGES</h3>
            <p className="text-lg text-gray-900 mb-4">
              Introducing TAGSLUX&apos;s latest collection, &quot;Off the Hinges&quot; – a bold and evocative lineup of designs that push the boundaries of streetwear fashion. This collection is an exploration of emotions and aesthetics, capturing the essence of raw creativity and fearless expression. Each piece is meticulously crafted to deliver a unique statement, ensuring that you stand out with every wear.
            </p>
            <p className="text-lg text-gray-900 mb-4">
              The &quot;Off the Hinges&quot; collection aims to dish out unique designs that will be released in Acts I to V from Hope, Chavelle, Picante, Nocturnal, Zephyrus, and a Bonus Act which will be a jersey.
            </p>

            <div className="text-lg text-gray-900 mb-4">
              <h4 className="text-2xl font-bold mb-2">Act I: Hope</h4>
              <p>
                The &quot;Hope ; &quot; design embodies the spirit of optimism and the promise of a brighter future. With vibrant colors and uplifting motifs, this piece is a beacon of positivity and resilience. Wearing &quot;Hope&quot; is a reminder that even in the darkest times, there is always a light at the end of the tunnel.
              </p>
            </div>

            <div className="text-lg text-gray-900 mb-4">
              <h4 className="text-2xl font-bold mb-2">Act II: Chavelle</h4>
              <p>
                The &quot;Chavelle&quot; design is inspired by the essence of elegance and sophistication. This piece features intricate patterns and a refined palette, making it perfect for those who appreciate the finer things in life. &quot;Chavelle&quot; represents grace, poise, and timeless style.
              </p>
            </div>

            <div className="text-lg text-gray-900 mb-4">
              <h4 className="text-2xl font-bold mb-2">Act III: Picante</h4>
              <p>
                &quot;Picante&quot; brings the heat with its bold, fiery design. This piece is all about passion and intensity, with striking colors and dynamic shapes that make a powerful statement. &quot;Picante&quot; is for those who aren't afraid to stand out and embrace their inner fire.
              </p>
            </div>

            <div className="text-lg text-gray-900 mb-4">
              <h4 className="text-2xl font-bold mb-2">Act IV: Nocturnal</h4>
              <p>
                The &quot;Nocturnal&quot; design is a tribute to the mysterious and the enigmatic. With deep, dark hues and subtle details, this piece captures the beauty of the night and the allure of the unknown. &quot;Nocturnal&quot; is perfect for those who thrive in the shadows and embrace their inner mystique.
              </p>
            </div>

            <div className="text-lg text-gray-900 mb-4">
              <h4 className="text-2xl font-bold mb-2">Act V: Zephyrus</h4>
              <p>
                &quot;Zephyrus&quot; is inspired by the gentle, refreshing breeze of the west wind. This design features light, airy fabrics and cool, calming colors that evoke a sense of tranquility and freedom. &quot;Zephyrus&quot; is for those who seek peace and harmony in their lives.
              </p>
            </div>

            <div className="text-lg text-gray-900 mb-4">
              <h4 className="text-2xl font-bold mb-2">Bonus Act: The Jersey</h4>
              <p>
                The Bonus Act is a special jersey that combines elements from all the previous acts. This piece is a celebration of the entire &quot;Off the Hinges&quot; collection, blending the optimism of &quot;Hope,&quot; the elegance of &quot;Chavelle,&quot; the intensity of &quot;Picante,&quot; the mystery of &quot;Nocturnal,&quot; and the tranquility of &quot;Zephyrus&quot; into one unique design.
              </p>
            </div>
          </section>

          <div className="flex justify-center space-x-4 mt-4">
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
        </section>
      </div>
    </div>
  );
};

export default About;
