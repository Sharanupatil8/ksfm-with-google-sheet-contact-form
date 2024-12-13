import { Poppins, PT_Serif } from "next/font/google";

const poppins_fonts = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "800", "900"],
});

const ptserif = PT_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

import "./globals.css";

export const metadata = {
  title: "Kar Na Sree Farm Meadows",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins_fonts.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
