import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeSection from "@/components/Home";
import Dokumentasi from "@/components/Dokumentasi";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <About />
      <Services />
      <Dokumentasi />
      <Contact />
      <Footer />
    </>
  );
}