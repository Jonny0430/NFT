'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"

const nftList = [
  { name: "Bored Ape", symbol: "BAYC", image: "/nfts/1.webp" },
  { name: "CryptoPunks", symbol: "PUNK", image: "/nfts/2.avif" },
  { name: "Azuki", symbol: "AZUKI", image: "/nfts/j.avif" },
  { name: "CloneX", symbol: "CLONEX", image: "/nfts/3.avif" },
  { name: "Doodles", symbol: "DOODLE", image: "/nfts/5.avif" },
  { name: "Moonbirds", symbol: "MBIRD", image: "/nfts/d.webp" },
  { name: "World of Women", symbol: "WOW", image: "/nfts/f.avif" },
]

export default function Exchange() {
  return (
    <div className="from-[#0f172a] to-[#4f46e5] text-white min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-4xl md:text-5xl bg-white text-black font-bold mb-4">
          Discover, Collect & Trade NFTs <br className="hidden md:block" />
          on the Decentralized Marketplace
        </h1>
        <p className="text-lg bg-white text-black text-gray-600 mb-6">
          Buy, sell, and explore unique digital assets secured on blockchain.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button>Explore Marketplace</Button>
          <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
            <Image src="/icons/apple.svg" width={20} height={20} alt="Apple" className="mr-2" />
            Download App
          </Button>
        </div>

        {/* NFT Table */}
        <div className="bg-white text-black rounded-xl shadow-xl overflow-hidden">
          <div className="flex justify-between px-6 py-4 border-b font-semibold text-sm">
            <div className="w-1/4">NFT</div>
            <div className="w-1/4 text-center">FLOOR PRICE</div>
            <div className="w-1/4 text-center">24H VOLUME</div>
            <div className="w-1/4 text-right">ACTION</div>
          </div>
          {nftList.map((nft, index) => (
            <div key={index} className="flex items-center px-6 py-4 border-b text-sm">
              <div className="w-1/4 flex items-center gap-2">
                <Image src={nft.image} alt={nft.name} width={24} height={24} />
                <span>{nft.name}</span>
              </div>
              <div className="w-1/4 text-center font-medium">Ξ 1.25</div>
              <div className="w-1/4 text-center text-green-600">Ξ 450.6K</div>
              <div className="w-1/4 text-right flex justify-end">
                <Button variant="ghost" className="text-blue-500 text-xs border border-blue-500">
                  View
                </Button>
              </div>
            </div>
          ))}
          <div className="px-6 py-3 text-right">
            <a href="#" className="text-blue-600 text-sm font-medium">Explore all collections →</a>
          </div>
        </div>
      </div>
    </div>
  )
}
