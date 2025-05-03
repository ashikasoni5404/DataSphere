import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CaseStudies() {
  const caseStudies = [
    {
      title: "Predictive Maintenance for Manufacturing",
      description: "Implemented an AI-powered predictive maintenance system that reduced equipment downtime by 37% and maintenance costs by 28%.",
      image: "https://images.pexels.com/photos/3912957/pexels-photo-3912957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["AI", "Manufacturing", "IoT"],
      results: "37% reduction in downtime"
    },
    {
      title: "Customer Segmentation for E-commerce",
      description: "Developed a sophisticated customer segmentation model to personalize marketing campaigns, increasing conversion rates by 24%.",
      image: "https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Data Science", "E-commerce", "Machine Learning"],
      results: "24% higher conversion rate"
    },
    {
      title: "Real-time Fraud Detection for Financial Services",
      description: "Built a real-time fraud detection system using machine learning, reducing fraudulent transactions by 92% while minimizing false positives.",
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Machine Learning", "Finance", "Security"],
      results: "92% fraud reduction"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            See how we've helped businesses transform their data into actionable intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden group h-full flex flex-col border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-blue-600/90 hover:bg-blue-700 text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{study.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-green-600 dark:text-green-400">
                  {study.results}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {study.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group/btn flex items-center p-0 h-auto">
                  <span className="text-blue-600 dark:text-blue-400">Read Case Study</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-blue-600 dark:text-blue-400 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="text-base" size="lg">
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}