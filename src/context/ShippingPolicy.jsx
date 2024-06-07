

const ShippingPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white shadow-sm rounded-lg p-9">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Shipping Policy</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Welcome to our Shipping Policy page. Here you will find all the necessary information about our shipping process, delivery times, and costs.
        </p>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Domestic Shipping</h3>
          <p className="mb-4 text-gray-600">
            We offer free standard shipping on all domestic orders over $50. Orders under $50 will incur a flat rate shipping fee of $5. Standard shipping typically takes 3-5 business days.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">International Shipping</h3>
          <p className="mb-4 text-gray-600">
            For international orders, we offer several shipping options. The cost and delivery time depend on the destination country and the selected shipping method. Please note that customers are responsible for any customs or import duties.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Order Processing</h3>
          <p className="mb-4 text-gray-600">
            Orders are processed and shipped within 1-2 business days. You will receive a confirmation email with tracking information once your order has been shipped.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Shipping Restrictions</h3>
          <p className="mb-4 text-gray-600">
            We currently do not ship to P.O. Boxes or APO/FPO addresses. Additionally, there may be certain locations we are unable to ship to. If you are located in such an area, we will contact you to discuss alternative arrangements.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Lost or Damaged Packages</h3>
          <p className="mb-4 text-gray-600">
            If your package is lost or damaged during shipping, please contact us immediately. We will work with the carrier to resolve the issue as quickly as possible.
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-black">Contact Us</h3>
          <p className="mb-4 text-gray-600">
            If you have any questions or concerns regarding our shipping policy, please feel free to contact our customer service team at <a href="mailto:tagslux@gmail.com" className="text-purple-600 hover:underline">tagslux@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;
