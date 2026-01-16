import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  delay?: number;
}

export default function BlogCard({ title, excerpt, date, author, image, delay = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full overflow-hidden flex flex-col hover:shadow-md transition-shadow">
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <CardHeader>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {date}</span>
            <span className="flex items-center gap-1"><User className="w-3 h-3" /> {author}</span>
          </div>
          <CardTitle className="line-clamp-2 hover:text-primary transition-colors cursor-pointer">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="p-0 h-auto font-semibold text-primary">Read More &rarr;</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
