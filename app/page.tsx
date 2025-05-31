import { Hero } from '@/components/home/Hero';
import { About } from '@/components/home/About';
import { Services } from '@/components/home/Services';
import { CaseStudies } from '@/components/home/CaseStudies';
import { Blog } from '@/components/home/Blog';
import { Contact } from '@/components/home/Contact';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

export default function Home() {
  return (
    <>
    <Header/>
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Blog />
      <Contact />
      <Footer/>
    </>
  );
}