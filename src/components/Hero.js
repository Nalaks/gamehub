import { Flex, Heading, Box } from '@chakra-ui/react'
import styles from '../styles/Hero.module.css'

export const Hero = ({ title }) => (
	<Flex
		className={styles.hero}
		alignItems='center'
		justifyContent='center'>
		<Box bg='#107C10' width='50vw' height='30vh' opacity='0.8'>
			<Heading fontSize='6vw'>{title}</Heading>
		</Box>
	</Flex>
)

Hero.defaultProps = {
	title: 'placeholder',
}
