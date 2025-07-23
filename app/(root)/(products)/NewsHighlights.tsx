'use client'

import Image from 'next/image'

const articles = [
  {
    title: 'NFTs are reshaping the digital art world',
    category: 'Blockchain',
    author: 'Satoshi Lee',
    date: 'Jul 20',
    image: '/images/11.avif',
    cols: 'col-span-2 row-span-2',
  },
  {
    title: 'How blockchain is revolutionizing finance',
    category: 'FinTech',
    author: 'Emily Zhang',
    date: 'Jul 18',
    image: '/images/12.avif',
  },
  {
    title: 'Top 5 NFT trends to watch in 2025',
    category: 'Technology',
    author: 'Alex Kim',
    date: 'Jul 15',
    image: '/images/13.avif',
  },
]


export default function NewsHighlights() {
  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <p className="text-sm text-gray-500 mb-4">
        <span className="font-semibold text-black">TRENDING NOW:</span> NFT and blockchain innovations are transforming the digital economy.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${article.cols || ''}`}
          >
            <Image
              src={article.image}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="brightness-75 hover:scale-105 transition-all duration-300"
            />
            <div className="absolute inset-0 p-4 flex flex-col justify-end text-white z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
              <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded w-fit mb-1">{article.category}</span>
              <h3 className="text-md font-semibold leading-snug">{article.title}</h3>
              {article.author && (
                <p className="text-xs mt-1 text-gray-200">
                  {article.author} - {article.date}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
