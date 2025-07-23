'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

const stories = [
  {
    title: 'OWNERSHIP REDEFINED',
    description:
      'Discover how NFTs are revolutionizing digital asset ownership and creative freedom.',
    image: '/nft/1.avif',
    button: 'LEARN ABOUT NFTs',
  },
  {
    title: 'DECENTRALIZED FUTURE',
    description:
      'Explore how blockchain is changing the way we think about trust, finance, and transparency.',
    image: '/nft/2.avif',
    button: 'EXPLORE BLOCKCHAIN',
  },
  {
    title: 'MEET OUR CREATORS',
    description:
      'Connect with digital artists and creators who are reshaping the future of art.',
    image: '/nft/3.avif',
    button: 'VIEW ARTISTS',
  },
  {
    title: 'MARKET TRENDS',
    description: 'Stay updated on NFT trends, analytics, and rising collections.',
    image: '/nft/4.avif',
    button: 'VIEW TRENDS',
  },
  {
    title: 'NFT SECURITY',
    description: 'Protect your digital wallet and learn best practices in crypto safety.',
    image: '/nft/5.avif',
    button: 'SECURE YOUR WALLET',
  },
  {
    title: 'METAVERSE JOURNEYS',
    description: 'Step into virtual worlds powered by blockchain technologies.',
    image: '/nft/6.avif',
    button: 'ENTER METAVERSE',
  },
  {
    title: 'NFT COOKBOOK',
    description: 'Step-by-step guides on how to mint, sell, and manage NFTs.',
    image: '/nft/7.avif',
    button: 'START MINTING',
  },
]


export default function StoryCarousel() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        THERES MORE TO OUR STORY
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        navigation
      >
        {stories.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex h-full flex-col rounded-xl overflow-hidden border bg-white shadow-md">
              {/* Image Section */}
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-grow justify-between p-4">
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
                </div>
                <Button variant="default" className="mt-4 w-full">
                  {item.button}
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
