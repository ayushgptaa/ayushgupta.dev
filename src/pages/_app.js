import '../../styles/main.scss';
import { Header } from '../components/Header';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Layout></Layout>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
