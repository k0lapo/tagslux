import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-10 md:py-16"> {/* Adjusted padding */}
      <div className="bg-white shadow-sm rounded-lg p-4 md:p-8"> {/* Adjusted padding */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-gray-800">Privacy Policy</h2> {/* Adjusted font size and margin */}
        <p className="mb-4 md:mb-6 text-gray-700 leading-relaxed text-base md:text-lg text-justify"> {/* Adjusted font size and margin */}
          Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
        </p>
        <section className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-black">Information We Collect</h3> {/* Adjusted font size and margin */}
          <p className="mb-3 md:mb-4 text-gray-600 text-base md:text-lg text-justify"> {/* Adjusted font size and margin */}
            We collect information from you when you visit our site, register on our site, place an order, subscribe to our newsletter, or fill out a form. The information collected may include your name, email address, mailing address, phone number, and credit card information.
          </p>
        </section>
        <section className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-black">How We Use Your Information</h3> {/* Adjusted font size and margin */}
          <p className="mb-3 md:mb-4 text-gray-600 text-base md:text-lg text-justify"> {/* Adjusted font size and margin */}
            The information we collect from you may be used in one of the following ways:
            <ul className="list-disc list-inside ml-4">
              <li>To personalize your experience</li>
              <li>To improve our website</li>
              <li>To improve customer service</li>
              <li>To process transactions</li>
              <li>To send periodic emails</li>
            </ul>
          </p>
        </section>
        <section className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-black">Protection of Your Information</h3> {/* Adjusted font size and margin */}
          <p className="mb-3 md:mb-4 text-gray-600 text-base md:text-lg text-justify"> {/* Adjusted font size and margin */}
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
          </p>
        </section>
        <section className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-black">Cookies</h3> {/* Adjusted font size and margin */}
          <p className="mb-3 md:mb-4 text-gray-600 text-base md:text-lg text-justify"> {/* Adjusted font size and margin */}
            We use cookies to enhance your experience on our website. Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your web browser (if you allow) that enables the site&apos;s or service provider&apos;s systems to recognize your browser and capture and remember certain information.
          </p>
        </section>
        <section className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-black">Third-Party Disclosure</h3> {/* Adjusted font size and margin */}
          <p className="mb-3 md:mb-4 text-gray-600 text-base md:text-lg text-justify"> {/* Adjusted font size and margin */}
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>
        </section>
        <section className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-black">Changes to Our Privacy Policy</h3> {/* Adjusted font size and margin */}
          <p className="mb-3 md:mb-4 text-gray-600 text-base md:text-lg text-justify"> {/* Adjusted font size and margin */}
            We may update our privacy policy from time to time. If we decide to change our privacy policy, we will post those changes on this page.
          </p>
        </section>
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-black">Contact Us</h3> {/* Adjusted font size and margin */}
          <p className="mb-3 md:mb-4 text-gray-600 text-base md:text-lg text-justify"> {/* Adjusted font size and margin */}
            If you have any questions regarding this privacy policy, you may contact us using the information below:
            <br />
            <a href="mailto:tagslux@gmail.com" className="text-purple-700 hover:underline">tagslux@gmail.com</a>
          </p>
        </section>
        <div className="flex justify-center space-x-3 md:space-x-4 mt-6 md:mt-10"> {/* Adjusted spacing */}
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

export default PrivacyPolicy;
