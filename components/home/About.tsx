import {
  Users,
  Trophy,
  LineChart,
  LightbulbIcon,
  BarChart,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  const values = [
    {
      icon: <LightbulbIcon className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      title: "Innovation",
      description:
        "We're constantly pushing the boundaries of what's possible with data and AI technologies."
    },
    {
      icon: <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      title: "Collaboration",
      description:
        "We work closely with our clients to understand their unique challenges and goals."
    },
    {
      icon: <Trophy className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      title: "Excellence",
      description:
        "We're committed to delivering high-quality solutions that exceed expectations."
    },
    {
      icon: <LineChart className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      title: "Results-Driven",
      description:
        "We focus on creating measurable impact and ROI for our clients' businesses."
    }
  ];

  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "40+", label: "Data Scientists" },
    { value: "5+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Who We Are
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            DataSphere is a leading provider of data and AI solutions, helping businesses
            unlock the full potential of their data assets.
          </p>
          <Button className="group mt-6">
            Learn More About Our Team
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg transition-transform hover:translate-y-[-4px]">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}