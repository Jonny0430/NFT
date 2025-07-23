import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href={'/'}>
			<div className='flex items-center gap-1'>
				<Image src={'/images/logo2.png'} alt='logo' width={80} height={30} />
			</div>
		</Link>
	)
}

export default Logo
