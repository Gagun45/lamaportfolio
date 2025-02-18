import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Portoflio desc",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden" style={{ scrollbarWidth: 'thin' }} >
      <body className={`${inter.className} ${''}`}>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
