"use client"
import { CuboidIcon as Cube } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Navbar() {
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = async () => {
    setIsConnecting(true)
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsConnecting(false)
  }

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Cube className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-semibold">Fairplay</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Markets</Button>
            <Button variant="ghost">SDK</Button>
            <Button 
              variant="default" 
              className="bg-orange-500 hover:bg-orange-600"
              onClick={handleConnect}
              disabled={isConnecting}
            >
              {isConnecting ? "Connecting..." : "Connect Wallet"}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

