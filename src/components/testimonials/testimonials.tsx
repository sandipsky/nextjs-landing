export default function Testimonials() {
    const testimonials = [
      {
        name: "John Doe",
        title: "CEO, Company A",
        feedback:
          "Next Corporate has transformed our business! Their solutions are top-notch, and the team is incredibly professional.",
        image: "/images/testimonial1.jpg", // Replace with your image
      },
      {
        name: "Jane Smith",
        title: "Founder, Startup B",
        feedback:
          "The team at Next Corporate is fantastic. Their ability to innovate and provide custom solutions helped our company scale rapidly.",
        image: "/images/testimonial2.jpg", // Replace with your image
      },
      {
        name: "Sarah Johnson",
        title: "Marketing Head, Enterprise C",
        feedback:
          "We’ve seen significant growth thanks to the strategies implemented by Next Corporate. Highly recommend their services!",
        image: "/images/testimonial3.jpg", // Replace with your image
      },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
  
          <div className="flex justify-center space-x-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-8 rounded-lg max-w-sm"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <p className="text-lg italic mb-4">"{testimonial.feedback}"</p>
                <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  