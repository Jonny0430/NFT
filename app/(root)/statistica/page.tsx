'use client'

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  Legend,
} from 'recharts'
import { Card } from '@/components/ui/card'

const data = [
  { day: 'Day 1', nftVolume: 5000, blockchainUsers: 1200 },
  { day: 'Day 2', nftVolume: 7200, blockchainUsers: 1400 },
  { day: 'Day 3', nftVolume: 6800, blockchainUsers: 1800 },
  { day: 'Day 4', nftVolume: 8000, blockchainUsers: 2100 },
  { day: 'Day 5', nftVolume: 9200, blockchainUsers: 2600 },
]

export default function Statistica() {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        NFT & Blockchain Growth Statistics
      </h2>

      <Card className="p-6 bg-white dark:bg-gray-900 shadow-md">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              label={{ value: 'Day', position: 'insideBottom', offset: -5 }}
            />
            <YAxis
              label={{ value: 'Value', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip />
            <Legend />

            {/* NFT Market Volume Line */}
            <Line
              type="monotone"
              dataKey="nftVolume"
              stroke="#8b5cf6"
              name="NFT Market Volume ($)"
              dot={{ r: 4 }}
            />

            {/* Blockchain Users Line */}
            <Line
              type="monotone"
              dataKey="blockchainUsers"
              stroke="#10b981"
              name="Blockchain Users"
              dot={{ r: 4 }}
            />

            {/* Background Area */}
            <Area
              type="monotone"
              dataKey="nftVolume"
              stroke="none"
              fill="#c084fc"
              fillOpacity={0.2}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </div>
  )
}
