import AosInit from "@/components/AosInit";
import JsonLinkingData from "@/components/JsonLinkingData";
import "../styles/globals.css";

export const metadata = {
  title: "Mayank Saini | Portfolio",
  description:
    "Full Stack Developer skilled in React, Next.js, Node.js, and MongoDB. I build responsive web apps with clean UI, secure backends, and modern web technologies.",
  keywords: [
    "Mayank Saini",
    "web developer",
    "full stack developer",
    "frontend web developer",
    "backend developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "MERN stack developer",
    "Mayank Saini portfolio",
    "developer from India",
    "JavaScript developer",
    "MongoDB developer",
    "Freelance web developer",
    "Mayank Saini full stack",
  ],
  openGraph: {
    title: "Mayank Saini | Portfolio",
    description:
      "Full Stack Developer skilled in React, Next.js, Node.js, and MongoDB. I build responsive web apps with clean UI, secure backends, and modern web technologies.",
    url: "https://mayanksaini.vercel.app/",
    locale: "en_US",
    type: "website",
  },
  authors: [{ name: "Mayank Saini" }],
  creator: "Mayank Saini",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png" },
      { url: "/favicon/favicon-32x32.png" },
    ],
    shortcut: ["/favicon/android-chrome-512x512.png"],
    apple: "/favicon/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon/apple-touch-icon.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <JsonLinkingData />
      </head>
      <body>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
