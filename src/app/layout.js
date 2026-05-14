import Header from "@/Components/Header/Header";
import "../styles/globals.scss";
import Footer from "@/Components/Footer/Footer";
import localFont from "next/font/local";
import { DM_Mono } from "next/font/google";

const zodiak = localFont({
  src: [
    {
      path: "../../public/fonts/zodiak/Zodiak-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/zodiak/Zodiak-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/zodiak/Zodiak-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-zodiak",
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi/Fonts/OTF/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Fonts/OTF/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Fonts/OTF/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Fonts/OTF/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
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
      <body className={`
    ${zodiak.variable}
    ${satoshi.variable}
    ${dmMono.variable}
  `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
