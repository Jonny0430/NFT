import Image from 'next/image'
import OurStory from './OurStory'
import StoryCarousel from './StoryCarousel'

const About = () => {
	return (
    <section className="w-full py-16 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Image Side */}
        <div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/nft.jpg" // ⚠️ public/images/ ichiga joylashtiring
            alt="NFT Ecosystem"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Side */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
            Our Mission: Empowering the Future of Digital Ownership
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We believe in decentralization, transparency, and creative freedom. 
            By leveraging blockchain technology, we provide a secure platform where 
            artists, collectors, and innovators can truly own, trade, and monetize their digital assets.
          </p>
        </div>
      </div>

      {/* NFT Journey Story */}
      <OurStory />

      {/* NFT Visual Carousel */}
      <StoryCarousel />
    </section>
  )
}

export default About
