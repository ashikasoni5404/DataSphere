import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Services } from '@/components/home/Services';
import { CaseStudies } from '@/components/home/CaseStudies';
import { Blog } from '@/components/home/Blog';
import { Contact } from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Blog />
      <Contact />
    </>
  );
}