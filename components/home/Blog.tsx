import { CalendarDays, ArrowUpRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Blog() {
  const posts = [
    {
      title: "The Future of Predictive Analytics in 2025",
      excerpt: "Explore how advanced predictive analytics will transform decision making across industries in the coming years.",
      image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Mar 15, 2025",
      readTime: "8 min read",
      category: "Data Science"
    },
    {
      title: "Building Scalable Data Pipelines: Best Practices",
      excerpt: "Learn essential strategies for designing data pipelines that can efficiently handle growing datasets and evolving requirements.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Feb 28, 2025",
      readTime: "12 min read",
      category: "Data Engineering"
    },
    {
      title: "Responsible AI: Ethical Considerations for Developers",
      excerpt: "Addressing the ethical challenges in artificial intelligence development and how to build more responsible AI systems.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Feb 12, 2025",
      readTime: "10 min read",
      category: "AI"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Thought leadership and expert perspectives on data science, engineering, and AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden group border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group/btn flex items-center p-0 h-auto">
                  <span className="text-blue-600 dark:text-blue-400">Read Article</span>
                  <ArrowUpRight className="ml-2 h-4 w-4 text-blue-600 dark:text-blue-400 transition-all group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="text-base" size="lg">
            View All Articles
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}