import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Code, Megaphone, Smartphone, CheckCircle, BarChart, PenTool } from "lucide-react";
import { Link } from "wouter";
import ServiceCard from "@/components/ServiceCard";
import heroBg from "@assets/generated_images/digital_agency_hero_background.png";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Website Design",
    description: "Custom, responsive websites that convert visitors into customers.",
    icon: Code,
  },
  {
    title: "Digital Marketing",
    description: "Strategic campaigns to increase your online visibility and ROI.",
    icon: Megaphone,
  },
  {
    title: "SEO Optimization",
    description: "Rank higher on search engines and drive organic traffic.",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-secondary text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Digital Agency Office" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/40" />
        </div>

        <div className="container relative z-10 px-4 py-20 mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
              Grow Your Business with <span className="text-primary">Smart Digital Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              We help ambitious businesses scale through innovative web development, strategic marketing, and data-driven SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "text-base px-8 py-6 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow")}>
                  Get Free Consultation
              </Link>
              <Link href="/services" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "text-base px-8 py-6 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white")}>
                  Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Core Services</h2>
            <p className="text-muted-foreground">
              We offer comprehensive digital solutions tailored to your business goals. From design to deployment, we've got you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className={cn(buttonVariants({ variant: "ghost" }), "text-primary hover:text-primary/80 gap-2 font-medium")}>
                View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl z-0" />
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl border border-border/50">
              <div className="space-y-6">
                {[
                  "Proven Track Record of Success",
                  "Dedicated Team of Experts",
                  "Transparent Reporting & Analytics",
                  "Customized Strategies for Every Client"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Why Partner With Us?</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              At BrightSpark, we don't just deliver services; we deliver results. Our approach is data-driven, customer-focused, and transparent.
            </p>
            <p className="text-muted-foreground mb-8">
              We understand that every business is unique. That's why we take the time to understand your specific challenges and goals before crafting a solution that works for you.
            </p>
            <Link href="/about" className={buttonVariants()}>
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container px-4 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            Let's discuss how we can help you achieve your business goals. Book a free consultation today.
          </p>
          <Link href="/contact" className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "font-bold text-primary")}>
              Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
