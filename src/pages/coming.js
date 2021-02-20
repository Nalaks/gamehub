import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Games } from '../components/Games'
import { Portal } from '@chakra-ui/react'

const Coming = () => (
	<Container height='100vh'>
		<Header />
		<Games />
		<Footer />
	</Container>
)

export default Coming
