import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthenticationProvider } from "@/provider/authentication";
import { UserProvider } from "@/provider/userProvider";
import { CategoryProvider } from "@/provider/categoryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NomNom swift delivery",
  description: "NomNom swift delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthenticationProvider>
          <UserProvider>
            <CategoryProvider>
              {children}
            </CategoryProvider>
          </UserProvider>
        </AuthenticationProvider>
      </body>
    </html>
  );
}
