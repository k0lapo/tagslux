
const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-8 py-16">
      <div className="bg-white shadow-sm rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Privacy Policy</h2>
        <p className="mb-6 text-gray-700 leading-relaxed text-justify">
          Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information.
        </p>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Information We Collect</h3>
          <p className="mb-4 text-gray-600 text-justify">
            We collect information from you when you visit our site, register on our site, place an order, subscribe to our newsletter, or fill out a form. The information collected may include your name, email address, mailing address, phone number, and credit card information.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">How We Use Your Information</h3>
          <p className="mb-4 text-gray-600 text-justify">
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
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Protection of Your Information</h3>
          <p className="mb-4 text-gray-600 text-justify">
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Cookies</h3>
          <p className="mb-4 text-gray-600 text-justify">
            We use cookies to enhance your experience on our website. Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your web browser (if you allow) that enables the site&apos;s or service provider&apos;s systems to recognize your browser and capture and remember certain information.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Third-Party Disclosure</h3>
          <p className="mb-4 text-gray-600 text-justify">
            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Changes to Our Privacy Policy</h3>
          <p className="mb-4 text-gray-600 text-justify">
            We may update our privacy policy from time to time. If we decide to change our privacy policy, we will post those changes on this page.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Contact Us</h3>
          <p className="mb-4 text-gray-600 text-justify">
            If you have any questions regarding this privacy policy, you may contact us using the information below:
            <br />
            <a href="mailto:tagslux@gmail.com" className="text-purple-700 hover:underline">tagslux@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
