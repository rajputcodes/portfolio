import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080B14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ganesh Singh | AI/ML Engineer Portfolio",
  description:
    "Explore Ganesh Singh's AI and machine learning portfolio, featuring Generative AI, agentic AI frameworks, machine learning projects, certifications, and software development.",
  keywords: [
    "Ganesh Singh",
    "AI/ML Engineer",
    "Generative AI",
    "Agentic AI",
    "Machine Learning",
    "Parul University",
    "CineMatch AI",
    "SmartBank AI",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Ganesh Singh", url: "https://github.com/rajout-codes" }],
  openGraph: {
    title: "Ganesh Singh | AI/ML Engineer Portfolio",
    description:
      "Explore Ganesh Singh's AI and machine learning portfolio, featuring Generative AI, agentic AI frameworks, machine learning projects, certifications, and software development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh Singh | AI/ML Engineer Portfolio",
    description:
      "Explore Ganesh Singh's AI and machine learning portfolio, featuring Generative AI, agentic AI frameworks, machine learning projects, certifications, and software development.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080B14] text-[#F8FAFC] antialiased selection:bg-[#8B5CF6]/30 selection:text-[#38BDF8]">
        {children}
      </body>
    </html>
  );
}
