import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PackagesSection from "@/components/sections/PackagesSection";
import GallerySection from "@/components/sections/GallerySection";
import SlideshowSection from "@/components/sections/SlideshowSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PackagesSection />
      <GallerySection />
      <SlideshowSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
