import { Header } from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "plurality-vecsearch",
  description: `Vector Search for Plurality`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col bg-black text-gray-100">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
