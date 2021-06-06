import '../../styles/main.scss';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Layout></Layout>
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
