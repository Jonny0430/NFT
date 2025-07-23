import Image from "next/image"


export default function DashboardSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container max-w-6xl px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          A simple, powerful dashboard
        </h2>

        <div className="relative flex justify-center">
          {/* Left background shapes */}
          <div className="absolute left-0 top-1/3 -z-10">
            <svg width="200" height="200" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" fill="#E0ECFF" />
            </svg>
          </div>

          <div className="relative w-full max-w-5xl rounded-2xl shadow-xl overflow-hidden">
            <Image
              src="https://exchange.blockchain.com/static/img/mercury/landing/ex-landing_dashboard-img.png" // change this path to your saved image
              alt="Dashboard preview"
              width={1400}
              height={600}
              className="w-full h-auto object-contain"
            />

            {/* Optional: Add overlay for mobile preview inside */}
            {/* Or add content with absolute positioning */}
          </div>
        </div>
      </div>
    </section>
  )
}