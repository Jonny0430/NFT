'use client'

import { Instagram, Facebook, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-10 items-start">

        {/* Logo */}
        <div className="col-span-2 flex justify-center md:justify-start">
<Image
  src="/images/logo2.png" // ✅ "src" bo‘lishi kerak
  alt="Logo"
  width={80}
  height={80}
  className="rounded-full bg-muted p-2 shadow-lg"
/>

        </div>
        {/* NFT Navigation */}
        <div className="flex flex-col text-sm gap-2 text-muted-foreground">
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/creators">Top Creators</Link>
          <Link href="/launchpad">Launchpad</Link>
        </div>

        {/* Blockchain Navigation */}
        <div className="flex flex-col text-sm gap-2 text-muted-foreground">
          <Link href="/wallet">Wallet</Link>
          <Link href="/blockchains">Supported Chains</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/pricing">Pricing</Link>
        </div>

        {/* Legal */}
        <div className="flex flex-col text-sm gap-2 text-muted-foreground">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/cookies">Cookie Policy</Link>
        </div>

        {/* Socials & Rights */}
        <div className="flex flex-col items-center md:items-end gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Seleor. All rights reserved.</p>
          <div className="flex gap-3">
            <Link href="https://instagram.com" target="_blank">
              <Instagram size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter size={20} />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <Facebook size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
