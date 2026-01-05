import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-coral/5 rounded-full blur-2xl animate-float animation-delay-200" />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 border border-coral/20 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-coral" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Digital Marketing Expert in Indore
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Transform Your Business with{" "}
            <span className="gradient-text">Expert Digital Marketing</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200 text-balance">
            Hi, I'm <strong className="text-primary-foreground">Arsh Jain</strong> – Your Partner for Growth-Driven Digital Marketing Strategies. I specialize in SEO, Meta Ads, Google Ads, and content marketing to help businesses scale their online presence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <Button variant="coral" size="xl" asChild>
              <a href="#contact">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="coral-outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <a href="#work">View My Work</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/10 animate-fade-in-up animation-delay-400">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-coral mb-2">1+</div>
              <div className="text-sm text-primary-foreground/60">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-coral mb-2">20+</div>
              <div className="text-sm text-primary-foreground/60">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-coral mb-2">150%</div>
              <div className="text-sm text-primary-foreground/60">Avg Traffic Growth</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-coral rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
