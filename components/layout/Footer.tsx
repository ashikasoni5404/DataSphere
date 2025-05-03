import Link from "next/link";
import { 
  Database, 
  BarChart2, 
  BrainCircuit,
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  Github
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <BarChart2 className="h-5 w-5 text-blue-500 dark:text-blue-300" />
                <BrainCircuit className="h-5 w-5 text-blue-400 dark:text-blue-200" />
              </div>
              <span className="font-bold text-lg text-gray-900 dark:text-white">
                DataSphere
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Transforming data into actionable intelligence for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Data Engineering
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Cloud Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  contact@datasphere.ai
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  123 Data Street, San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} DataSphere. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
              Developed by <span className="font-medium text-blue-600 dark:text-blue-400">Ashika Soni</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}