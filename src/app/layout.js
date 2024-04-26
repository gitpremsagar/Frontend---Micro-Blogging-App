import { Inter } from "next/font/google";
import "./globals.css";
import WebsiteFooter from "@/components/footer/WebsiteFooter";
import WebsiteHeader from "@/components/header/WebsiteHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Micro-Blogging App",
  description:
    "A simple micro-blogging app built with Next.js and Tailwind CSS by Prem Sagar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WebsiteHeader />
        {children}
        <WebsiteFooter />
      </body>
    </html>
  );
}
