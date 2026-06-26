import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const siteUrl = "https://hossain-mahmud.me";
const siteTitle = "Hossain Mahmud | Software Developer";
const siteDescription =
  "Official portfolio of Hossain Mahmud, a Bangladeshi software developer building modern web applications, backend systems, APIs, and ecommerce projects with React, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL.";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Hossain Mahmud",
  },
  description: siteDescription,
  applicationName: "Hossain Mahmud Portfolio",
  keywords: [
    "Hossain Mahmud",
    "hossain-mahmud",
    "hossain mahmud portfolio",
    "Hossain Mahmud software developer",
    "Bangladeshi software developer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "Backend developer",
    "API developer",
    "Full stack developer",
  ],
  authors: [{ name: "Hossain Mahmud", url: siteUrl }],
  creator: "Hossain Mahmud",
  publisher: "Hossain Mahmud",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assets/photo.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Hossain Mahmud",
    images: [
      {
        url: "/assets/photo.png",
        width: 1200,
        height: 1200,
        alt: "Hossain Mahmud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/assets/photo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Hossain Mahmud",
    alternateName: ["hossain-mahmud", "Hossain-Mahmud40"],
    url: siteUrl,
    image: `${siteUrl}/assets/photo.png`,
    jobTitle: "Software Developer",
    nationality: "Bangladeshi",
    email: "mailto:hossainpromil6286@gmail.com",
    telephone: "+8801788895287",
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "API development",
      "Frontend development",
      "Backend development",
      "Problem solving",
    ],
    sameAs: [
      "https://github.com/Hossain-Mahmud40",
      "https://www.linkedin.com/in/hossain-mahmud-4588573ab/",
      "https://www.facebook.com/hossainmp40",
      "https://www.instagram.com/hossainmp40",
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      personSchema,
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Hossain Mahmud",
        description: siteDescription,
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: siteTitle,
        mainEntity: personSchema,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
