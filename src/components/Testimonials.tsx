import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Arsh transformed our online presence completely. His SEO expertise helped us rank on the first page of Google for our main keywords. As a digital marketer in Indore, he truly understands the local market while delivering global-standard results.",
    author: "Rajesh Sharma",
    role: "Owner, Local Retail Business",
    rating: 5,
  },
  {
    quote: "Working with Arsh was a game-changer for our social media strategy. His Meta Ads campaigns brought us consistent leads at costs we never thought possible. Highly recommend his services as a social media marketing agency partner!",
    author: "Priya Mehta",
    role: "Marketing Manager, Startup",
    rating: 5,
  },
  {
    quote: "Professional, responsive, and results-driven. Arsh's Google Ads campaigns doubled our website traffic and significantly increased our sales. His approach to digital marketing is both strategic and creative.",
    author: "Amit Verma",
    role: "E-Commerce Business Owner",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding gradient-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral/10 rounded-full blur-2xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-coral/20 text-coral text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            What{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Don't just take my word for it – hear from the businesses I've helped grow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-coral mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-coral text-coral" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-coral flex items-center justify-center text-accent-foreground font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
