import Hero from "./_components/Hero";
import About from "./_components/About";
import Description from "./_components/Description";
import TestimonialsSection from "./_components/Testimonial";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Description />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
