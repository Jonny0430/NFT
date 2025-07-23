import Link from 'next/link'
import { Button } from '../ui/button'
import Logo from './logo'
import { User } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-options'
import UserBox from './user-box'
import LanguageSwitcher from '@/app/(root)/(products)/LanguageSwitcher'

const Navbar = async () => {
	const session = await getServerSession(authOptions)

	return (
		<div className='h-20 bg-secondary border-b fixed inset-0 z-50'>
			<div className='container max-w-6xl flex items-center justify-between h-full'>

				<Logo />

				<div className="flex items-center gap-4">
					<Button asChild variant="ghost">
						<Link href="/about">About</Link>
					</Button>
					<Button asChild variant="ghost">
						<Link href="/statistica">Static</Link>
					</Button>
					<Button asChild variant="ghost">
						<Link href="/exchange">Exchange</Link>
					</Button>

					{/* ✅ LanguageSwitcher oddiy Button ichiga joylashtirmang */}
					<LanguageSwitcher />
				</div>

				<div className='flex items-center gap-2'>
					{session?.currentUser?._id ? (
						<UserBox user={session.currentUser} />
					) : (
						<Button asChild size="icon">
							<Link href="/sign-in">
								<User />
							</Link>
						</Button>
					)}
				</div>
			</div>
		</div>
	)
}

export default Navbar
