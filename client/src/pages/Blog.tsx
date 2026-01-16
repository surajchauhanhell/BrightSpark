import BlogCard from "@/components/BlogCard";

const posts = [
  {
    title: "The Future of Web Design: Trends to Watch in 2026",
    excerpt: "Discover the latest trends shaping the digital landscape, from AI-driven layouts to immersive 3D experiences.",
    date: "Oct 15, 2025",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "5 SEO Strategies That Actually Work for Small Businesses",
    excerpt: "Stop wasting time on outdated tactics. Here are 5 proven SEO strategies to boost your local visibility.",
    date: "Nov 02, 2025",
    author: "Mike Ross",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Why Your Business Needs a Responsive Website",
    excerpt: "With mobile traffic surpassing desktop, having a mobile-friendly site is no longer optional—it's essential.",
    date: "Dec 10, 2025",
    author: "Jessica Pearson",
    image: "https://images.unsplash.com/photo-1555421689-4917d7d79b68?auto=format&fit=crop&w=800&q=80",
  }
];

export default function Blog() {
  return (
    <div className="py-12 md:py-20 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Latest Insights</h1>
          <p className="text-lg text-muted-foreground">
            Tips, trends, and insights from our team of digital experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
}
