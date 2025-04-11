import Hero from "./_components/Hero";
import About from "./_components/About";
import Description from "./_components/Description";
import TestimonialsSection from "./_components/Testimonial";
import Footer from "./_components/Footer";
import VideoEmbed from "./_components/VideoEmbed";
import Features from "./_components/Features";
import Highlight from "./_components/Highlight";
import CtaLinks from "./_components/CtaLinks";
import PopUpForm from "./_components/PopUpForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Highlight />
      <Features />
      <Description />
      <TestimonialsSection />
    </>
  );
}
