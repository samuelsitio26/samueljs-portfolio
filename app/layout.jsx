import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
  title: "Samueljs_ | Portofolio",

  description:
    "My name is Samueljs_. I'm a web developer and I'm passionate about it.",

  author: "Samuel Sitio",
  siteUrl: "https://samueljs.vercel.app",
  applicationName: "Samueljs_",

  keywords: ["samueljs_", "samuel js", "samueljs portfolio", "web developer"],

  openGraph: {
    type: "website",
    url: "https://samueljs.vercel.app",
    title: "Samueljs_ | Portofolio",
    site_name: "Samueljs_ | Portofolio",
    description: "My name is Samueljs_. This is my portofolio website.",
    width: 1200,
    height: 630,
    images: [
      {
        url: "/og-image-rev.png",
        alt: "Samueljs_ Portofolio",
      },
    ],
    site_name: "Samueljs_ | Portofolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientTopProgressBar />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
