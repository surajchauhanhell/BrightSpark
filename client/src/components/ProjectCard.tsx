import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  delay?: number;
}

export default function ProjectCard({ title, category, image, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="overflow-hidden group border-none shadow-md">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
            <h3 className="text-white font-bold text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{title}</h3>
            <Badge variant="secondary" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{category}</Badge>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
