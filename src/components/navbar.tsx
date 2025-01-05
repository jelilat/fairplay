"use client";
import { CuboidIcon as Cube } from "lucide-react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Navbar() {
  // const { address } = useAccount()

  return (
    <nav className="bg-white border-b border-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              {/* <Cube className="h-8 w-8 text-orange-500" /> */}
              <span className="text-xl font-semibold">Fairplay</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/markets"
              className="text-green hover:text-green/80 cursor-pointer"
            >
              Markets
            </Link>
            <Link
              href="/sdk"
              className="text-green hover:text-green/80 cursor-pointer"
            >
              SDK
            </Link>
          </div>
          <div className="flex items-center">
            <ConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
