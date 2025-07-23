'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // yoki Skeleton qo'yish mumkin

  return (
    <section className="py-20 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Side */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {t('nft_1', { ns: 'home' })}{' '}
            <span className="text-orange-600">NFT</span>
          </h2>
          <p className="text-gray-700 max-w-lg">
            {t('nft', { ns: 'home' })}
          </p>
          <div className="flex gap-4">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">Get a demo</Button>
            <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-100">
              Get started free
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            Get a demo of our premium software, or get started with free tools.
          </p>
        </div>

        {/* Image Side */}
        <div className="flex-1 relative flex justify-center items-center">
          <Image
            src="/images/9.webp"
            alt="HubSpot Demo"
            width={500}
            height={400}
            className="rounded-lg shadow-md object-contain"
          />
        </div>
      </div>
    </section>
  )
}
