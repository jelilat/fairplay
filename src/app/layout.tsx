import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/crypto/provider";

const agrandir = localFont({
  src: [
    {
      path: "../../public/fonts/Agrandir/Agrandir-Regular.otf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../../public/fonts/Agrandir/Agrandir-Tight.otf",
    //   weight: "300",
    //   style: "normal",
    // },
  ],
  variable: "--font-agrandir",
});

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
      <body className={`${agrandir.variable} bg-[#fff5ea]`}>
        <Providers>
          <div>
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
