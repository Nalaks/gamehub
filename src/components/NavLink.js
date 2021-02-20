import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export const NavLink = props => {
	const { children, href } = props
	return (
		<NextLink passHref href={href}>
			<Link
				px={2}
				py={1}
				rounded={'md'}
				_hover={{ textDecoration: 'none', bg: 'gray.200' }}>
				{children}
			</Link>
		</NextLink>
	)
}
