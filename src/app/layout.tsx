import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "./redux/store-provider";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Obrio Questionnarie",
  description: "Test task by Oleh Zelinskyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
