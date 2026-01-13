import Header from "@/Components/Header/Header";
import "../styles/globals.scss";
import { Marcellus, Inter } from "next/font/google";
import Footer from "@/Components/Footer/Footer";

export const marcellus = Marcellus({
  subsets: ["latin"],
  variable: "--font-marcellus",
  weight: "400",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Workation Dharamshala | Remote Work Stays in the Himalayas",
  description:
    "Workation Dharamshala offers premium remote work stays with fast WiFi, power backup, and peaceful mountain views.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
