import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainFooter } from "@/components/custom/Footer";
import { MainNav } from "@/components/custom/NavBar";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pitz Rugby Club",
  description: "Aplicación administrativa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    let theme = ''
    return (
      <html lang="es" className={theme}>
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
                <MainNav/>
                {children}
                <MainFooter/>
            </ThemeProvider>
          </body>
      </html>
    );
}
