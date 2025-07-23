import { ChildProps } from '@/types'
import './globals.css'
import { Montserrat } from 'next/font/google'
import React, { FC } from 'react'
import Navbar from '@/components/shared/navbar'
import { Toaster } from '@/components/ui/toaster'
import SessionProvider from '@/components/providers/session.provider'
import Footer from '@/components/shared/footer'
import Script from 'next/script'
import I18nProvider from './dashboard/i18n.provider'

const montserrat = Montserrat({
	weight: ['400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
})

const RootLayout: FC<ChildProps> = ({ children }) => {
	return (
		<SessionProvider>
			<I18nProvider>
				<html lang='en'>
					<body className={`${montserrat.className} antialiased`}>
						<Script
							id='hubspot-script'
							strategy='afterInteractive'
							src='//js-na2.hs-scripts.com/243152650.js'
						/>
						<Navbar />
						<main className='container max-w-6xl mt-24'>{children}</main>
						<Toaster />
						<Footer />
					</body>
				</html>
			</I18nProvider>
		</SessionProvider>
	)
}

export default RootLayout
