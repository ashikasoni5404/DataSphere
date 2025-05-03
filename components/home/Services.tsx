import { 
  Database, 
  BarChart2, 
  BrainCircuit, 
  Server, 
  AreaChart, 
  LineChart, 
  Network, 
  TabletSmartphone, 
  Search, 
  PieChart, 
  Bot, 
  ShieldCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Services() {
  const mainServices = [
    {
      icon: <Database className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "Data Engineering",
      description: "Build robust data pipelines and infrastructure to collect, store, and process your data at scale.",
      features: [
        { icon: <Server className="h-5 w-5" />, text: "Data Pipeline Development" },
        { icon: <Network className="h-5 w-5" />, text: "ETL/ELT Process Design" },
        { icon: <ShieldCheck className="h-5 w-5" />, text: "Data Governance & Security" }
      ]
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "Data Science",
      description: "Extract valuable insights from your data using advanced analytics, machine learning, and visualization.",
      features: [
        { icon: <PieChart className="h-5 w-5" />, text: "Predictive Analytics" },
        { icon: <AreaChart className="h-5 w-5" />, text: "Statistical Modeling" },
        { icon: <Search className="h-5 w-5" />, text: "Exploratory Data Analysis" }
      ]
    },
    {
      icon: <BrainCircuit className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      title: "AI Solutions",
      description: "Leverage artificial intelligence to automate processes, gain competitive insights, and drive business decisions.",
      features: [
        { icon: <Bot className="h-5 w-5" />, text: "Natural Language Processing" },
        { icon: <TabletSmartphone className="h-5 w-5" />, text: "Computer Vision Systems" },
        { icon: <LineChart className="h-5 w-5" />, text: "Recommendation Engines" }
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Comprehensive data and AI solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-800 overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mb-4 p-2 inline-block bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 text-blue-600 dark:text-blue-400">
                        {feature.icon}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Our team of experts can design a tailored solution to address your specific business challenges.
          </p>
          <Button size="lg" className="px-8">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}