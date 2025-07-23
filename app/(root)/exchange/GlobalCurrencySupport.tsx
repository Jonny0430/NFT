'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FaWallet, FaDownload } from "react-icons/fa"
import { SiEthereum, SiBinance, SiSolana } from "react-icons/si"

export default function BlockchainGlobalAccess() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="bg-white p-2 rounded-full shadow">
              <img src="https://plus.unsplash.com/premium_photo-1661724918165-c4598fb21b64?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8" alt="Blockchain icon" className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">NFT & Blockchain</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Access NFTs globally with blockchain support
          </h2>
          <p className="text-muted-foreground max-w-md">
            Connect, trade, and manage your NFTs across Ethereum, Binance Smart Chain, and Solana—wherever you are.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button className="bg-violet-600 hover:bg-violet-700 text-white">
              <FaWallet className="mr-2" />
              Connect Wallet
            </Button>
            <Button variant="outline" className="flex gap-2 items-center">
              <FaDownload />
              Download App
            </Button>
          </div>
        </div>

        {/* Right cards for blockchain support */}
        <div className="flex flex-wrap justify-center gap-6">
          <Card className="w-56 p-5 flex flex-col gap-3 shadow-md">
            <div className="flex items-center gap-2">
              <SiEthereum className="text-purple-600 w-6 h-6" />
              <p className="font-medium">Ethereum</p>
            </div>
            <p className="text-sm text-muted-foreground">
              ERC-721 & ERC-1155 support
            </p>
          </Card>

          <Card className="w-56 p-5 flex flex-col gap-3 shadow-md">
            <div className="flex items-center gap-2">
              <SiBinance className="text-yellow-500 w-6 h-6" />
              <p className="font-medium">Binance Smart Chain</p>
            </div>
            <p className="text-sm text-muted-foreground">
              BEP-721 & BEP-1155 standards
            </p>
          </Card>

          <Card className="w-56 p-5 flex flex-col gap-3 shadow-md">
            <div className="flex items-center gap-2">
              <SiSolana className="text-blue-500 w-6 h-6" />
              <p className="font-medium">Solana</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Metaplex token standard
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
