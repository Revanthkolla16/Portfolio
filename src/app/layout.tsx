import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revanth Kolla — Portfolio",
  description:
    "CS Student at IIITDM Kancheepuram | Backend Development | ML & Deep Learning | GenAI & AI Agents | DSA Enthusiast",
  openGraph: {
    title: "Revanth Kolla — Portfolio",
    description:
      "CS Student | Backend Development | ML & Deep Learning | GenAI & AI Agents",
    images: ["https://avatars.githubusercontent.com/u/169203664?v=4"],
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Revanth Kolla — Portfolio",
    images: ["https://avatars.githubusercontent.com/u/169203664?v=4"],
  },
  icons: {
    icon: "https://avatars.githubusercontent.com/u/169203664?v=4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
