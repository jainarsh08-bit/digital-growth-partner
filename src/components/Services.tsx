import { Search, FileText, Facebook, Chrome, Linkedin, Share2 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Boost your website's visibility on Google with strategic SEO techniques. I optimize your website structure, content, and technical elements to help you rank higher.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Engaging content that tells your brand story and resonates with your audience. From blog posts to social media content, I create compelling narratives.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Facebook,
    title: "Meta Ads",
    description: "Reach your ideal customers with precision-targeted Meta Ads campaigns on Facebook & Instagram. I design, launch, and optimize campaigns that maximize your ROI.",
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    icon: Chrome,
    title: "Google Ads",
    description: "Get immediate visibility with strategic Google Ads campaigns. I manage PPC campaigns across Search, Display, and Shopping networks to drive qualified leads.",
    color: "bg-coral/10 text-coral",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Marketing",
    description: "Connect with professionals and B2B audiences through strategic LinkedIn marketing. Build authority, generate leads, and expand your professional network.",
    color: "bg-sky-500/10 text-sky-600",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Complete social media management across all platforms. I create cohesive strategies that build community, drive engagement, and grow your brand presence.",
    color: "bg-pink-500/10 text-pink-600",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-semibold mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Comprehensive Services to{" "}
            <span className="gradient-text">Elevate Your Brand</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From SEO to social media, I offer a full suite of digital marketing services designed to drive growth and deliver measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
