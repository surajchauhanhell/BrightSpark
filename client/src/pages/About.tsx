import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import teamImage from "@assets/generated_images/office_team_collaboration.png";

export default function About() {
  return (
    <div className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Founded in 2021</Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Who We Are</h1>
            <p className="text-lg text-muted-foreground mb-6">
              BrightSpark Digital Solutions is a full-service digital agency based in Mumbai, India. We were founded with a simple mission: to help small and medium-sized businesses navigate the complex digital landscape and achieve sustainable growth.
            </p>
            <p className="text-muted-foreground mb-6">
              What started as a small team of passionate developers and marketers has grown into a comprehensive agency serving clients across the globe. We believe in the power of technology to transform businesses and lives.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
            <img 
              src={teamImage} 
              alt="BrightSpark Team" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-muted/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold font-heading mb-4 text-primary">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower businesses with innovative digital solutions that drive growth, enhance brand value, and create meaningful connections with their audience.
            </p>
          </div>
          <div className="bg-muted/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold font-heading mb-4 text-primary">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the most trusted digital partner for businesses, known for our creativity, integrity, and unwavering commitment to client success.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-3xl font-bold font-heading text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Innovation", desc: "We stay ahead of trends to deliver cutting-edge solutions." },
              { title: "Integrity", desc: "We believe in honest, transparent, and ethical business practices." },
              { title: "Excellence", desc: "We strive for perfection in every pixel and every line of code." },
              { title: "Collaboration", desc: "We work closely with our clients as true partners." }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 border rounded-lg hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
