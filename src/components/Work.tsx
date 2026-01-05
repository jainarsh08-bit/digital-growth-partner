import { TrendingUp, Users, MousePointerClick, Briefcase } from "lucide-react";

const projects = [
  {
    icon: TrendingUp,
    category: "SEO Campaign",
    title: "E-Commerce SEO Success",
    client: "Local Fashion Retailer in Indore",
    challenge: "Low organic visibility and website traffic",
    solution: "Implemented comprehensive SEO strategy including keyword optimization, technical SEO fixes, and content creation.",
    results: [
      { metric: "150%", label: "Increase in Organic Traffic" },
      { metric: "45%", label: "Improvement in Rankings" },
      { metric: "30%", label: "Boost in Online Sales" },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    category: "Meta Ads",
    title: "Lead Generation Campaign",
    client: "Home Services Company",
    challenge: "Generate qualified leads at lower cost",
    solution: "Created strategic Meta Ads campaigns with audience segmentation and compelling ad creatives.",
    results: [
      { metric: "200+", label: "Qualified Leads" },
      { metric: "40%", label: "Reduced Cost Per Lead" },
      { metric: "25%", label: "Higher Conversion Rate" },
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: MousePointerClick,
    category: "Google Ads",
    title: "Student Enrollment Drive",
    client: "Educational Institute",
    challenge: "Increase student enrollment during admission season",
    solution: "Multi-channel Google Ads strategy across Search and Display networks.",
    results: [
      { metric: "300+", label: "Inquiries in 3 Months" },
      { metric: "60%", label: "Increase in Website Visits" },
      { metric: "35%", label: "Higher Enrollment" },
    ],
    color: "from-coral to-orange-400",
  },
  {
    icon: Briefcase,
    category: "LinkedIn",
    title: "B2B Lead Generation",
    client: "B2B Software Company",
    challenge: "Connect with decision-makers and generate enterprise leads",
    solution: "LinkedIn content strategy and targeted outreach campaigns.",
    results: [
      { metric: "50+", label: "Qualified B2B Leads" },
      { metric: "80%", label: "Profile Engagement Up" },
      { metric: "15", label: "High-Value Meetings" },
    ],
    color: "from-sky-500 to-blue-600",
  },
];

const Work = () => {
  return (
    <section id="work" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-semibold mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Projects That{" "}
            <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See how I've helped businesses achieve their digital marketing goals with data-driven strategies and creative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-white/80 text-sm font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-1">Client</p>
                  <p className="font-medium text-foreground">{project.client}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-1">Challenge</p>
                  <p className="text-foreground">{project.challenge}</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Solution</p>
                  <p className="text-foreground">{project.solution}</p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold gradient-text">{result.metric}</div>
                      <div className="text-xs text-muted-foreground mt-1">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
