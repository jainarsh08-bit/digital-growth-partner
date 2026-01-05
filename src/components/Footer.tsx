import { MapPin, Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react";

const services = [
  "Search Engine Optimization",
  "Content Marketing",
  "Meta Ads Management",
  "Google Ads Management",
  "LinkedIn Marketing",
  "Social Media Marketing",
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="text-2xl font-bold mb-4 inline-block">
              Arsh<span className="text-coral">.</span>
            </a>
            <p className="text-primary-foreground/70 mb-6">
              Digital Marketer in Indore. Helping businesses grow through strategic digital marketing, SEO, and social media marketing.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-coral transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-coral transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-coral transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-coral transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-coral transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-coral transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="text-primary-foreground/70 hover:text-coral transition-colors">
                  My Work
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/70 hover:text-coral transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-coral transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">
                  Indore, Madhya Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-coral flex-shrink-0" />
                <a
                  href="mailto:arshjain@email.com"
                  className="text-primary-foreground/70 hover:text-coral transition-colors"
                >
                  arshjain@email.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-coral flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-primary-foreground/70 hover:text-coral transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Arsh Jain - Digital Marketer in Indore | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
