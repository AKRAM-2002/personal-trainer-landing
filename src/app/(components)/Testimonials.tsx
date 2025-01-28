"use client";
const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", quote: "Amazing trainer! I lost 20 lbs in 3 months." },
    { name: "Jane Smith", quote: "Best decision I ever made. My strength has doubled!" },
    { name: "Mike Johnson", quote: "Professional and motivating. Highly recommend!" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What My Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;