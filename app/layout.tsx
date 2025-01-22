import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Nunito, Outfit } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adsbin | Dashboard",
  description: "Upload and manage your ads with ease.",
  icons: {
    icon: "/convex.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${nunito.variable} ${outfit.variable} h-screen flex flex-col antialiased`}
        >
          <div className="flex-1 h-full">
            <ThemeProvider attribute="class">{children}</ThemeProvider>
          </div>
        </body>
      </html>
    </>
  );
}
