import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fairplay - Risk-free Prediction Markets",
  description: "Create and participate in risk-free prediction markets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-emerald-50`}>{children}</body>
    </html>
  );
}
