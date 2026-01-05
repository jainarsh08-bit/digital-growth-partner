import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "Personalized approach tailored to your business goals",
    "Focus on ROI and measurable outcomes",
    "Staying up-to-date with the latest trends",
    "Transparent communication and regular reporting",
    "Local expertise with a global mindset",
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual Side */}
          <div className="relative animate-fade-in-up">
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-2xl gradient-navy overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 rounded-full gradient-coral mx-auto mb-6 flex items-center justify-center text-5xl font-bold text-accent-foreground shadow-coral">
                      AJ
                    </div>
                    <h3 className="text-2xl font-bold text-primary-foreground mb-2">Arsh Jain</h3>
                    <p className="text-primary-foreground/70">Digital Marketing Professional</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-coral/20 rounded-2xl -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-coral/30 rounded-2xl -z-0" />
          </div>

          {/* Content Side */}
          <div className="animate-fade-in-up animation-delay-200">
            <span className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-semibold mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Digital Marketing Professional in{" "}
              <span className="gradient-text">Indore</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Hello! I'm Arsh Jain, a passionate digital marketing professional based in Indore with 1 year of hands-on experience helping businesses grow their online presence. I combine creativity with analytics to craft campaigns that not only engage but convert.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're a startup looking to establish your digital footprint or an established business aiming to scale, I bring fresh perspectives and proven strategies to the table.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              <h4 className="font-semibold text-primary mb-4">What sets me apart:</h4>
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
