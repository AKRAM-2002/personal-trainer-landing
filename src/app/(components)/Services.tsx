"use client";
const Services = () => {
    const services = [
      { title: "Direct Access", description: "24/7 access to your personal trainer." },
      { title: "Custom Workouts", description: "Tailored workout plans for your goals." },
      { title: "Meal Plans", description: "Personalized nutrition to fuel your progress." },
      { title: "Accountability", description: "Weekly check-ins to keep you on track." },
    ];
  
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;