"use client";

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-yellow-400 text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Life?</h2>
        <p className="text-xl mb-8">Book your free consultation today and take the first step towards your fitness goals.</p>
        <a
          href="#"
          className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
};

export default CTA;