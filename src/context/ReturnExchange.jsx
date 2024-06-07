

const ReturnExchange = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white shadow-sm rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Return & Exchange Policy</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          We strive to ensure that you are completely satisfied with your purchase. If you are not satisfied with your order, we are here to help.
        </p>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Eligibility for Returns & Exchanges</h3>
          <p className="mb-4 text-gray-600">
            Items can be returned or exchanged under the following conditions:
            <ul className="list-disc list-inside ml-4">
              <li>The item must be unused, unworn, unwashed, and in the same condition that you received it.</li>
              <li>The item must have the original tags attached.</li>
              <li>The item must be returned within 30 days of purchase.</li>
              <li>Proof of purchase is required (e.g., order number, receipt).</li>
            </ul>
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">How to Return or Exchange an Item</h3>
          <p className="mb-4 text-gray-600">
            To initiate a return or exchange, please follow these steps:
            <ul className="list-decimal list-inside ml-4">
              <li>Contact our customer service team at <a href="mailto:tagslux@gmail.com" className="text-purple-700 hover:underline">tagslux@gmail.com</a> with your order number and details of the item you wish to return or exchange.</li>
              <li>Our team will provide you with a Return Merchandise Authorization (RMA) number and instructions on how to proceed.</li>
              <li>Pack the item securely in its original packaging, including all original tags and accessories.</li>
              <li>Clearly write the RMA number on the outside of the package.</li>
              <li>Ship the package to the address provided by our customer service team.</li>
            </ul>
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Processing Your Return or Exchange</h3>
          <p className="mb-4 text-gray-600">
            Once we receive your return, we will inspect the item to ensure it meets our return policy criteria. If approved, we will process your refund or exchange within 7-10 business days. Refunds will be issued to the original method of payment. Exchanges will be shipped to the original shipping address.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Damaged or Defective Items</h3>
          <p className="mb-4 text-gray-600">
            If you received a damaged or defective item, please contact our customer service team immediately at <a href="mailto:tagslux@gmail.com" className="text-purple-700 hover:underline">tagslux@gmail.com</a>. We will work with you to resolve the issue as quickly as possible.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Contact Us</h3>
          <p className="mb-4 text-gray-600">
            If you have any questions about our return and exchange policy, please contact us at:
            <br />
            <a href="mailto:tagslux@gmail.com" className="text-purple-700 hover:underline">tagslux@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ReturnExchange;
