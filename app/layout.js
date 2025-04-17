import { Poppins, PT_Serif } from "next/font/google";
import SmoothScrolling from "./_components/SmoothScrolling";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import Preloader from "./_components/Preloader"; // Import the Preloader component

const poppins_fonts = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "800", "900"],
});

import "./globals.css";

export const metadata = {
  title: "Karnasree Farms | Farmland and Farmhouse For Sale Near Bengaluru",
  description:
    "Discover KarNaSree Farm Meadows, offering 900+ farmlands, luxury farm villas (1,2,3 BHK), and 25+ world-class amenities, just 90 minutes from the airport. Invest in a serene and sustainable lifestyle today!",
  keywords:
    "farmlands near bengaluru, farm villa projects, luxury farmhouses, KarNaSree Farm Meadows, investment in farmland, nature living, eco-friendly villas, farm plots for sale, bengaluru real estate, customizable farm villas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins_fonts.className}  antialiased relative overflow-x-hidden`}
      >
        <div id="modal-root" className=""></div>
        <Preloader /> {/* This will be rendered client-side */}
        <SmoothScrolling>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
