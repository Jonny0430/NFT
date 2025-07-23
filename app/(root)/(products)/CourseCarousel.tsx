'use client'

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const courses = [
  {
    title: "NFT Essentials for Beginners",
    image: "/images/2.jpg",
    students: 45210,
    rating: 5,
    bg: "bg-cyan-100",
  },
  {
    title: "Creating and Selling NFTs",
    image: "/images/3.webp",
    students: 38100,
    rating: 5,
    bg: "bg-pink-100",
  },
  {
    title: "Smart Contracts with Solidity",
    image: "/images/4.jpg",
    students: 60045,
    rating: 5,
    bg: "bg-yellow-100",
  },
  {
    title: "Build Your NFT Marketplace",
    image: "/images/5.jpg",
    students: 72560,
    rating: 5,
    bg: "bg-blue-100",
  },
  {
    title: "Web3 & Blockchain for Creators",
    image: "/images/6.jpg",
    students: 49020,
    rating: 5,
    bg: "bg-purple-100",
  },
  {
    title: "NFT Art Design Basics",
    image: "/images/7.jpg",
    students: 31200,
    rating: 5,
    bg: "bg-emerald-100",
  },
  {
    title: "Crypto Wallets & NFT Security",
    image: "/images/8.webp",
    students: 40800,
    rating: 5,
    bg: "bg-red-100",
  },
  {
    title: "Tokenomics & NFT Utility",
    image: "/images/9.webp",
    students: 27650,
    rating: 5,
    bg: "bg-indigo-100",
  },
  {
    title: "Metaverse & Virtual NFTs",
    image: "/images/10.avif",
    students: 19300,
    rating: 5,
    bg: "bg-pink-200",
  },
]


export default function CourseCarousel() {
  return (
    <section className="py-10 px-6 md:px-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">NFT</h2>
        <Button variant="link" className="text-sm text-blue-600">See all</Button>
      </div>

      <Swiper spaceBetween={16} slidesPerView={2} breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }}>
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className={`rounded-xl p-4 h-full ${course.bg}`}>
              <div className="flex justify-center">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="text-center mt-4 space-y-1">
                <h3 className="font-semibold text-sm">{course.title}</h3>
                <div className="flex justify-center text-yellow-500">
                  {Array.from({ length: course.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <p className="text-xs text-gray-600">{course.students.toLocaleString()} user</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
