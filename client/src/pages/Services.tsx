import { Code, Megaphone, BarChart, PenTool, Globe, Smartphone, Server, Shield } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const allServices = [
  {
    title: "Website Design & Development",
    description: "We build fast, responsive, and secure websites tailored to your brand. From corporate sites to e-commerce platforms.",
    icon: Globe,
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies including PPC, social media ads, and email marketing to grow your audience.",
    icon: Megaphone,
  },
  {
    title: "SEO Optimization",
    description: "Data-driven SEO strategies to improve your search engine rankings and drive organic traffic.",
    icon: BarChart,
  },
  {
    title: "Graphic Design",
    description: "Creative visual design for your brand identity, including logos, brochures, and marketing materials.",
    icon: PenTool,
  },
  {
    title: "Social Media Management",
    description: "Engage your audience on platforms like Instagram, LinkedIn, and Facebook with curated content.",
    icon: Smartphone,
  },
  {
    title: "Website Maintenance",
    description: "Regular updates, security checks, and backups to keep your website running smoothly 24/7.",
    icon: Server,
  },
];

export default function Services() {
  return (
    <div className="py-12 md:py-20 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            We offer a comprehensive suite of digital services designed to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {allServices.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">How We Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We analyze your business goals and target audience." },
              { step: "02", title: "Strategy", desc: "We create a tailored roadmap for your success." },
              { step: "03", title: "Execution", desc: "Our team implements the strategy with precision." },
              { step: "04", title: "Growth", desc: "We monitor results and optimize for continuous improvement." }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-gray-100 absolute -top-8 -left-4 z-0">{item.step}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-6">Need a custom solution?</h3>
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
             Talk to an Expert
          </Link>
        </div>
      </div>
    </div>
  );
}
