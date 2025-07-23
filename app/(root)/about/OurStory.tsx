import Image from 'next/image'

export default function OurStory() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Our Story</h2>
          <p className="text-sm text-muted-foreground leading-relaxed space-y-4">
            In 2004, fellow MIT graduate students Brian Halligan and Dharmesh Shah noticed a major shift in the way people shop and purchase products.
            Buyers didn’t want to be interrupted by ads, they wanted helpful information. In 2006, they founded HubSpot to help companies use that shift to grow better with inbound marketing.
          </p>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            Along the way, HubSpot expanded beyond marketing into a crafted, not cobbled suite of products that create the frictionless customer experience that buyers expect today.
            Expertly led by CEO Yamini Rangan, HubSpot uses its customer platform built on an AI-powered Smart CRM to help millions of scaling organizations grow better.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-72 md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/f.webp"
            alt="Founders sitting and smiling"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
