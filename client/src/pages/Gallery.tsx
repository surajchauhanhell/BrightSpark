import ProjectCard from "@/components/ProjectCard";
import webMockup from "@assets/generated_images/website_mockup_3d.png";
import appMockup from "@assets/generated_images/mobile_app_mockup_3d.png";
import brandMockup from "@assets/generated_images/branding_identity_mockup.png";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: webMockup,
  },
  {
    title: "FinTech App UI",
    category: "App Design",
    image: appMockup,
  },
  {
    title: "TechCorp Branding",
    category: "Branding",
    image: brandMockup,
  },
  {
    title: "Real Estate Portal",
    category: "Web Development",
    image: webMockup, // Reusing for demo
  },
  {
    title: "Health & Fitness App",
    category: "Mobile App",
    image: appMockup, // Reusing for demo
  },
  {
    title: "Coffee Shop Identity",
    category: "Graphic Design",
    image: brandMockup, // Reusing for demo
  }
];

export default function Gallery() {
  return (
    <div className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Portfolio</h1>
          <p className="text-lg text-muted-foreground">
            A showcase of our recent work. We take pride in delivering high-quality solutions that drive results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
}
