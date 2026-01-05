import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Target, BadgeCheck, FileCheck } from "lucide-react";

const benefits = [
  { icon: Clock, text: "Free 30-minute consultation" },
  { icon: Target, text: "Customized marketing strategy" },
  { icon: BadgeCheck, text: "Transparent pricing" },
  { icon: FileCheck, text: "No long-term contracts" },
];

const CTA = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-coral animate-gradient" />
          
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's create a winning digital marketing strategy together. Whether you need SEO, paid advertising, or a complete digital marketing overhaul, I'm here to help.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 justify-center bg-white/10 backdrop-blur-sm rounded-lg py-3 px-4"
                  >
                    <benefit.icon className="w-5 h-5 text-accent-foreground" />
                    <span className="text-sm font-medium text-accent-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant="navy"
                size="xl"
                className="text-lg"
                asChild
              >
                <a href="mailto:arshjain@email.com">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>

              <p className="mt-6 text-accent-foreground/70 text-sm">
                Contact me today to discuss how we can elevate your digital presence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
