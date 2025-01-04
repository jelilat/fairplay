"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useState } from 'react'

interface MarketCardProps {
  title: string
  description: string
  endDate: string
  totalStaked: number
  yesPercentage: number
}

export function MarketCard({ title, description, endDate, totalStaked, yesPercentage }: MarketCardProps) {
  const [isStaking, setIsStaking] = useState<'yes' | 'no' | null>(null)

  const handleStake = async (position: 'yes' | 'no') => {
    setIsStaking(position)
    // Simulate staking delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsStaking(null)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-gray-500">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>Total Staked: {totalStaked} ETH</span>
            <span>Ends: {endDate}</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Yes</span>
              <span>{yesPercentage}%</span>
            </div>
            <Progress value={yesPercentage} className="h-2" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button 
          className="flex-1 bg-emerald-600 hover:bg-emerald-700"
          onClick={() => handleStake('yes')}
          disabled={isStaking !== null}
        >
          {isStaking === 'yes' ? 'Staking...' : 'Stake Yes'}
        </Button>
        <Button 
          className="flex-1" 
          variant="outline"
          onClick={() => handleStake('no')}
          disabled={isStaking !== null}
        >
          {isStaking === 'no' ? 'Staking...' : 'Stake No'}
        </Button>
      </CardFooter>
    </Card>
  )
}

