import {
	Box,
	Flex,
	HStack,
	IconButton,
	useDisclosure,
	Stack,
	Spacer,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { DarkModeSwitch } from './DarkModeSwitch'
import { NavLink } from './NavLink'

export const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Box px={4} bg='inherit'>
				<Flex
					h={16}
					alignItems={'center'}
					justifyContent={'space-between'}>
					<IconButton
						size={'md'}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={'Open Menu'}
						display={{ md: !isOpen ? 'none' : 'inherit' }}
						onClick={isOpen ? onClose : onOpen}
					/>
					<HStack spacing={8} alignItems={'center'}>
						<Box>Logo</Box>
						<Spacer />
						<HStack
							as={'nav'}
							spacing={4}
							display={{ base: 'none', md: 'flex' }}>
							<NavLink href='/'>Home</NavLink>
							<NavLink href='/coming'>Coming Soon</NavLink>
							<NavLink href='/'>GamePass</NavLink>
							<NavLink href='/'>Games with Gold</NavLink>
							<NavLink href='/'>Sale</NavLink>
						</HStack>
					</HStack>
					<Flex alignItems={'center'}>
						<DarkModeSwitch />
					</Flex>
				</Flex>

				{isOpen ? (
					<Box
						pb={4}
						pl={4}
						mr={8}
						position='absolute'
						zIndex={2}
						bgColor='inherit'
						w='100%'
						left={0}>
						<Stack as={'nav'} spacing={4}>
							<NavLink href='/'>Home</NavLink>
							<NavLink href='/coming'>Coming Soon</NavLink>
							<NavLink href='/'>GamePass</NavLink>
							<NavLink href='/'>Games with Gold</NavLink>
							<NavLink href='/'>Sale</NavLink>
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	)
}
