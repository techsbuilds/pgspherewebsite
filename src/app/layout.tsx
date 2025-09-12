import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PGSPHERE",
  description: "PGSPHERE - Find and manage paying guest accommodations with ease.",
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  openGraph: {
    title: "PGSPHERE",
    description: "PGSPHERE - Find and manage paying guest accommodations with ease.",
    images: ["/logo.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body
        className={`${assistant.variable} antialiased overflow-x-hidden`}
      >
        <div className="w-full max-w-[100vw] overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
