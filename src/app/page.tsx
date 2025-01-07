import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Coins, Code } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-cream pt-32 pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff5ea_50%,#2d4d31_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-6xl font-light text-green mb-6">
                No-Loss Prediction Markets
              </h1>
              <p className="text-xl text-green/80 mb-8 max-w-lg">
                Unlocking risk-free prediction markets for developers and
                users.. Stake your assets, earn rewards, and never lose your
                principal.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-[#2d4d31] text-white hover:bg-[#2d4d31]/90 group"
                >
                  <Link href="/markets">Start Trading</Link>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#2d4d31] text-[#2d4d31] hover:bg-[#2d4d31]/5"
                >
                  <Link href="/markets">View Markets</Link>
                </Button>
              </div>
            </div>
            <div className="relative z-10">
              <div className="aspect-square max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 rotate-3 transform hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green" />
                      <span className="text-sm font-medium">Live Market</span>
                    </div>
                    <span className="text-sm text-green/60">
                      24h Volume: $1.2M
                    </span>
                  </div>
                  <h3 className="text-xl font-medium">
                    Will ETH reach $3000 by Q1 2024?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="bg-emerald-50 border-emerald-200 text-emerald-700"
                    >
                      Yes $2.00
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-red-50 border-red-200 text-red-700"
                    >
                      No $3.80
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-6 w-6 text-green" />
              </div>
              <h3 className="text-xl font-medium mb-4">Risk-Free Trading</h3>
              <p className="text-gray-600">
                Your principal is always protected. Trade with confidence
                knowing you can&apos;t lose your stake.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
                <Coins className="h-6 w-6 text-green" />
              </div>
              <h3 className="text-xl font-medium mb-4">Earn Rewards</h3>
              <p className="text-gray-600">
                Earn up to 36% APY on your predictions through our unique
                staking mechanism.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-6">
                <Code className="h-6 w-6 text-green" />
              </div>
              <h3 className="text-xl font-medium mb-4">Developer First</h3>
              <p className="text-gray-600">
                Integrate prediction markets into your app with our simple SDK
                and earn 10% of fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-[#2d4d31] mb-8">
            Ready to start trading without risk?
          </h2>
          <Button
            size="lg"
            className="bg-cream text-[#2d4d31] hover:bg-white border-[#2d4d31] border"
          >
            <Link href="/markets">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
